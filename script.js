const liczbyGracza = new Set();
const liczbyWylosowane = new Set();

while(liczbyGracza.size < 6){
    let liczbaPobrana = parseInt(prompt(`Podaj liczbę ${liczbyGracza.size+1}:`));
    if (liczbaPobrana > 1 && liczbaPobrana < 49 ){
        liczbyGracza.add( liczbaPobrana );
    }
}

while(liczbyWylosowane.size < 6){
    liczbyWylosowane.add( Math.round(Math.random()*48+1) );
}

//liczbyWylosowane.has() sprawdzanie

