import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";

export const PrivateRoute = () => {
	const navigate = useNavigate();

	//   function isEventStarted(): boolean {
	//     const eventStartDate = new Date("2024-02-14T12:59:59.000Z");

	//     const now = new Date().getTime();
	//     const millisecondsSinceStart = now - eventStartDate.getTime();
	//     return millisecondsSinceStart >= 0;
	//   }

	async function handleClick() {
		const session = await supabase.auth.getUser();
		if (!session.data.user?.id) {
			await supabase.auth.signOut();
			// toast.error("Please sign in first");
			navigate("/landing");
		}
		// else if (!isEventStarted()) {
		//   navigate("/");
		// }
		// alan hosting
	}

	useEffect(() => {
		handleClick();
	}, [navigate]);

	return <Outlet />;
};
