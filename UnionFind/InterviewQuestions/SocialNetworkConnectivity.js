/*
    Social Network Connectivity:
    Given a social network containing nn members and a log file containing mm timestamps at which times pairs of members formed friendships, 
    design an algorithm to determine the earliest time at which all members are connected (i.e., every member is a friend of a friend of a friend ... of a friend). 
    Assume that the log file is sorted by timestamp and that friendship is an equivalence relation. 
    The running time of your algorithm should be m \log nmlogn or better and use extra space proportional to nn.
*/
import { WeightedQuickUnionUF } from "../WeightedQuickUnion.js";

class SocialNetworkConnectivity {
	#uf;
	#numComponents;

	constructor(n) {
		this.#numComponents = n;
		this.#uf = new WeightedQuickUnionUF(n);
	}

	addFriendship(p, q) {
		if (!this.#uf.connected(p, q)) {
			this.#numComponents -= 1;
		}

		this.#uf.union(p, q);
	}

	fullyConnected() {
		return this.#numComponents === 1;
	}
}

const earliestFullConnected = (input) => {
	const snc = new SocialNetworkConnectivity(input.members);

	for (const log of input.logs) {
		snc.addFriendship(log[0], log[1]);

		if (snc.fullyConnected()) {
			return log[2];
		}
	}

	return null;
};

/*
    Input:
    {
        numbers: the number of members in the social network
        logs: [
            [member1, member2, timestamp]
        ]
    }
*/
const input = {
	members: 6,
	logs: [
		[0, 1, 0],
		[1, 2, 1],
		[2, 5, 2],
		[5, 4, 3],
		[4, 3, 4], // All members are connected
		[3, 0, 5],
		[4, 2, 6],
		[4, 1, 7],
		[4, 0, 8],
	],
};

console.log(earliestFullConnected(input));
