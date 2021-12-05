import axios from 'axios'

const url = 'https://shorturl.at/ghlpK'

export const fetchVideos = async () => await axios.get(url)