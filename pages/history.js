import {
	faBirthdayCake,
	faCircleNotch,
	faMask,
	faMedal,
	faRandom,
	faVideo,
	faPalette,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import styled from "styled-components";
import Event from "../components/event";

const EventsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	& > * {
		flex: 0 1 calc(50% - 16px);
		margin: 8px;

		max-width: 35%;
	}

	@media (max-width: 800px) {
		flex-direction: column;

		& > * {
			flex-basis: 100%;
			max-width: unset;
		}
	}
`;

export default function HistoryPage() {
	return (
		<>
			<Head>
				<title>History - The Snakeroom</title>
			</Head>
			<EventsContainer>
				<Event icon={faPalette} name="Place" time="April 2022">
					For the second iteration of Place, players were invited to
					place a pixel on a blank canvas once every 5 minutes. Each
					day of the event another 1000x1000 pixel portion of the
					canvas was made available. Sneknet was developed in two
					parts, a website for uploading and joining project groups,
					and an extension to display these groups as an overlay.
					Snakeroom used this infrastructure to draw a logo on the
					canvas and then partnered with several nearby groups to
					integrate their designs into the main project.
				</Event>
				<Event icon={faMedal} name="Second" time="April 2021">
					In Second, all players received the same set of three images
					on which to vote in lightning rounds. In each round, those
					who voted for the second-place image the earliest got the
					most points. Those who voted for the first-place image
					received no points. The fourth iteration of the Sneknet
					automatically placed votes on images most likely to be voted
					second place, allowing our users to climb up the
					leaderboard.
				</Event>
				<Event icon={faMask} name="Imposter" time="April 2020">
					In this event, players received four messages by other
					players mixed with one generated by an AI and needed to
					determine which one was generated by the bot. The third
					iteration of the Sneknet collected results from each round
					to determine which of the five messages was generated by the
					bot. With enough data, the correct answer could
					automatically be selected.
				</Event>
				<Event icon={faVideo} name="RPAN" time="August 2019">
					RPAN is a streaming event with a cap on streamers and
					length. The Snakeroom was able to stream before its initial
					launch although Reddit admins quickly shut this down. Once
					the event went live, the Snakeroom used a script that sniped
					slots and allowed users to broadcast from an OBS stream,
					bypassing the intended limitation of streaming from a mobile
					device and allowing Snakeroom members to create &quot;Place
					Live&quot; and &quot;RPAN Plays Pokémon&quot;.
				</Event>
				<Event icon={faRandom} name="Sequence" time="April 2019">
					During this event, players were able to upload and vote on
					GIFs, with the highest-upvoted GIFs selected to become part
					of the final video. The second iteration of the Sneknet
					locked in select GIFs using the power of Snakeroom
					participants, without chancing success on the whims of the
					wider Reddit community.
				</Event>
				<Event
					icon={faCircleNotch}
					name="Circle of Trust"
					time="April 2018"
				>
					During Circle of Trust, each player could create a single
					circle with a passcode of their choice. Players could share
					their passcode with others so that their circle could gain
					more members, but doing so allowed further spread of the
					passcode and the ability for players to betray the circle,
					ending it. The first iteration of the Sneknet made players
					join a circle from a command sent on the backend and added
					anyone running the extension before the circle could be
					betrayed.
				</Event>
				<Event
					icon={faBirthdayCake}
					name="Snakeroom Begins"
					time="March 2018"
				>
					In the leadup to Circle of Trust, the community founded The
					Snakeroom Alliance after discovering the subreddit
					r/snakeroomtest, with many believing it to be part of the
					event. Eventually, the name was shortened to simply The
					Snakeroom and a development team was formed to interact with
					the upcoming event.
				</Event>
			</EventsContainer>
		</>
	);
}
