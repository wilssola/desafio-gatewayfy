import {LoaderFunction, redirect} from "@remix-run/node";
import React, {useEffect} from "react";
import {useEventSource} from "remix-utils/sse/react";
import {useSocket} from "~/context";
import {LOGIN_PATH, WHATSAPP_QR_SSE_PATH} from "~/routes";
import {envLoader} from "~/utils/env-loader.server";
import {WHATSAPP_QR_SSE_EVENT} from "~/routes/sse.whatsapp-qr";
import {QRCode} from "react-qrcode-logo";
import {getUserSession} from "~/services/auth.server";
import {checkMailAuthVerified} from "~/models/mail.server";
import {useLoaderData} from "@remix-run/react";
import Header from "~/components/dashboard/Header";
import {createBotSessionByUserId, getBotSessionByUserId,} from "~/models/bot.server";
import {HTTPStatus} from "~/enums/http-status";

/**
 * Loader function to handle the initial data fetching for the dashboard page.
 * @param {object} param0 - The request object.
 * @param {Request} param0.request - The request object.
 * @returns {Promise<object>} The environment variables.
 */
export const loader: LoaderFunction = async ({
  request,
}: {
  request: Request;
}): Promise<object> => {
  const user = await getUserSession(request);
  if (!user) {
    return redirect(LOGIN_PATH, HTTPStatus.UNAUTHORIZED);
  }

  await checkMailAuthVerified(request);

  const env = await envLoader();

  let botSession = await getBotSessionByUserId(user!.id);
  if (!botSession || !botSession.state) {
    botSession = await createBotSessionByUserId(user!.id);
  }

  return { env, user, botSession };
};

/**
 * Component to render the dashboard page.
 * @returns {React.ReactElement} The dashboard page component.
 */
export default function Dashboard(): React.ReactElement {
  const socket = useSocket();
  const loaderData = useLoaderData<typeof loader>();

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on("event", (data) => {
      console.log(`Received event from Server (${socket.id}):`, data);
    });
  }, [socket]);

  const whatsappQr = useEventSource(WHATSAPP_QR_SSE_PATH, {
    event: WHATSAPP_QR_SSE_EVENT,
  });

  return (
    <>
      <Header user={loaderData.user} />

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <QRCode value={whatsappQr ?? ""} logoImage="/whatsapp.png"></QRCode>
        </div>
      </main>
    </>
  );
}
