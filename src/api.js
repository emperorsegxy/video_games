import axios from 'axios'

const url = 'https://public.connectnow.org.uk/applicant-test/'

export const fetchVideos = async () => await axios.get(url)