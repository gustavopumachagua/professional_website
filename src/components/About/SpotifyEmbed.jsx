import { useState } from "react";
import { Loader } from "../Shared/index";
const SpotifyEmbed = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="py-6">
      <div className="rounded-[36px] overflow-hidden relative">
        {isLoading && <Loader />}
        <iframe
          src="https://open.spotify.com/embed/playlist/6PruOhQcfMRGXEyofoRXIg"
          width="100%"
          height="500"
          style={{ backgroundColor: "transparent" }}
          allow="encrypted-media"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default SpotifyEmbed;
