async function apiCall() {
    const resposta = await fetch("http://localhost:4000/courses")
    const body = await resposta.json()




    console.log(body)
}
export default apiCall()
apiCall();
