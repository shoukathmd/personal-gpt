// ChatPage.js

import Chat from "@/components/Chat";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Providers from "../../providers";

const ChatPage = () => {
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <Providers>
      <HydrationBoundary state={dehydratedState}>
        <Chat />
      </HydrationBoundary>
    </Providers>
  );
};

export default ChatPage;
