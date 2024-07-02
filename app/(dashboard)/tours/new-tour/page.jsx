// ChatPage.js

import Chat from "@/components/Chat";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Providers from "../../../providers";
import NewTour from "../../../../components/NewTour";

const NewTourPage = () => {
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <Providers>
      <HydrationBoundary state={dehydratedState}>
        <NewTour />
      </HydrationBoundary>
    </Providers>
  );
};

export default NewTourPage;
