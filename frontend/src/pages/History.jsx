import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import '../styles/History.css';

export default function History() {
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // TODO: implement snackbar
            }
        };
        fetchHistory();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="history-container">
            <IconButton className="home-button" onClick={() => navigate("/home")}>
                <HomeIcon />
            </IconButton>

            {meetings.length ? (
                meetings.map((meeting, i) => (
                    <Card key={i} className="history-card" variant="outlined">
                        <CardContent>
                            <Typography className="history-code" gutterBottom>
                                Code: {meeting.meetingCode}
                            </Typography>
                            <Typography className="history-date">
                                Date: {formatDate(meeting.date)}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Typography className="no-history">No meeting history found.</Typography>
            )}
        </div>
    );
}
