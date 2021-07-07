import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import ArtistSearch from "../Cards/ArtistSearchContent";
import Post from "../features/post/Post";
import PostPageLayout from "../features/post/PostPageLayout";
export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/artist" component={ArtistSearch} />
                <Route path="/forum" component={PostPageLayout} />
            </Switch>
        </div>
    );
}
