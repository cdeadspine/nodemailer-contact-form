param(
    [string]$port = "8080",
    [string]$path = "/send"
)
$global:uri = "http://localhost:$($port)$($path)"

$Form = @{
    firstName  = 'John'
    lastName   = 'Doe'
    email      = 'john.doe@email.com'    
    birthday   = '1980-10-15'
}
Invoke-WebRequest -Uri $global:uri -Method Post -Body $Form




#test multipart form submission
$boundary = [System.Guid]::NewGuid().ToString()
$fields = @{firstName='Betsy';lastName='Maloney';email='Betsy@multipartemail.com';birthday='2020-10-15'}
$body = @"
$boundary
$(ConvertTo-Json $fields)
$boundary
"@
#TODO this doesnt work properly yet, however multipart form upload is working
#Invoke-RestMethod -Uri $global:uri -Body $body -Method Post -ContentType "multipart/form-data; boundary=`"$($boundary)`""