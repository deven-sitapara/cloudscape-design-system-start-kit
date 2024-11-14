import LoadingBar from "@cloudscape-design/chat-components/loading-bar";
import LiveRegion from "@cloudscape-design/components/live-region";

export default function LoadingEffect() {
  return (
    <LiveRegion>
      <LoadingBar variant="gen-ai" />
    </LiveRegion>
  );
}
