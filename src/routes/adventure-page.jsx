import React, { useState } from 'react';
import Typewriter from '../components/typewriter';

const TextAdventureGame = () => {
    // Game state
    const [currentRoom, setCurrentRoom] = useState('start');
    const [inventory, setInventory] = useState([]);
    const [output, setOutput] = useState([]);

    // Rooms and scenarios

    const enterSchool = () => {
        window.location.replace('/')
    };

    const rooms = {
        start: {
            description: "The air is cold.\nThe landscape is wide, open and harsh behind you, treeline distant, mountains even further away. \nThe incline you stand on is steep, and only continues uphill ahead.",
            actions: {
                'keep going': 'further uphill'
            }
        },
        'further uphill': {
            description: "You question yourself as the footing becomes more and more treacherous. The grass, yellowed and greyed by lack of direct sunlight and the cold, crunches under your steps.",
            actions: {
                'keep going': 'near peak'
            }
        },
        'near peak': {
            description: "Your cold hands instinctively reach out to grab at the near lifeless grass before you even realize what's happening. Your foot slipped. You notice your breathing is heavy, not labored, but heavy, and you take a minute to steady yourself. The sky overhead is an indifferent grey, obscuring the sun and moon.",
            actions: {
                'keep going': 'peak'
            }
        },
        'peak': {
            description: "You've reached the peak. The wind is strong and cold. You see a broad plateau that stretches to the edge of the chaotic and savage ocean. It's populated by a small collection of buildings, what appears to be a campus of some kind.",
            actions: {
                'approach the campus': () => {
                    addTextToOutput('Welcome...')
                    enterSchool()
                },
                'go back': 'near peak'
            }
        }
    };

    // Function to add text to the game output
    const addTextToOutput = (text) => {
        setOutput((prevOutput) => [...prevOutput, text]);
    };

    // Function to display the room description and available actions
    const displayRoom = (roomKey) => {
        const room = rooms[roomKey];
        addTextToOutput(room.description);
        addTextToOutput("Available actions: \n" + Object.keys(room.actions).map(
            (action) => `- ${action}`
        ).join(", "));
    };

    const startGame = () => {
        setInventory([]);
        setOutput([]);
        displayRoom('start');
    };
    // Function to handle player's input
    const play = (action) => {
        const room = rooms[currentRoom];
        const roomAction = room.actions[action];

        if (typeof roomAction === 'function') {
            roomAction();
        } else if (roomAction) {
            setCurrentRoom(roomAction);
            displayRoom(roomAction);
        } else {
            addTextToOutput("You can't do that.");
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const input = event.target.elements.action.value.trim().toLowerCase();
        if (input) {
            play(input);
            event.target.reset();
        }
    };

    // Start the game by displaying the initial room
    React.useEffect(() => {
        startGame();
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className='TextAdventureGame'>
            <div id="game-output" style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', border: '1px solid #000', padding: '10px', height: '200px', overflowY: 'auto', marginBottom: '10px' }}>
                {<Typewriter text={output.join('\n')} />}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="action" placeholder="Enter your action" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default function AdventurePage() {
    return (
        <div className="container mx-auto p-5">
            <TextAdventureGame />
        </div>
    );
};
