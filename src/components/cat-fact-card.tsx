import { useState, useEffect} from 'react'; 
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CatFactCard() {
    const [fact, setFact] = useState('');

    useEffect(() => {
        axios
          .get("https://catfact.ninja/fact")
          .then((response: any) => {
            setFact(response.data.fact);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      return (
        <div>
      <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cat Fact
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {fact ? <p>{fact}</p> : <p>loading...</p>}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">New Fact</Button>
      </CardActions>
      </Card>
        </div>
      )
};


