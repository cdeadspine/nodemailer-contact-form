param(
    [string]$port = "8080",
    [string]$path = "/send"
)

$Form = @{
    firstName  = 'John'
    lastName   = 'Doe'
    email      = 'john.doe@email.com'    
    birthday   = '1980-10-15'
}
Invoke-WebRequest -Uri http://localhost:$($port)$($path) -Method Post -Body $Form