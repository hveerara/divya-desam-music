import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardMeta } from "semantic-ui-react";
import { getBackgroundImageUrl } from "../lib/util";
export default function SongCard(props) {
  return (
    <Link to={`/song/${props.title}`} state={{ ...props }} key={props.id}>
      <Card
        className="p-5 border-2 rounded-lg border-slate-300 font-poppins text-slate-200 bg-cover bg-no-repeat backdrop-filter backdrop-blur-sm"
        style={{
          backgroundImage: getBackgroundImageUrl(props.category),
          width: 300,
          height: 200,
        }}
      >
        {props.songTitle !== "" ? (
          <CardContent className="align-items-left justify-center backdrop-filter backdrop-blur-sm">
            {props.category !== "Mangalam" && props.category !== "Prayer" && (
              <CardHeader>
                <span className="text-left">Sthalam: </span>
                {props.song}
              </CardHeader>
            )}
            <CardMeta>
              <span className="align-items-left text-left">Song: </span>
              {props.songTitle}
            </CardMeta>
          </CardContent>
        ) : (
          <CardContent className="align-items-left justify-center backdrop-filter backdrop-blur-sm">
            <CardHeader>
              <span className="text-left">Coming Soon...</span>
            </CardHeader>
          </CardContent>
        )}
      </Card>
    </Link>
  );
}
