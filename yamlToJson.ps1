param(
    [switch]$pretty
)

try{
    $test = Get-Command "ConvertFrom-Yaml" -ErrorAction Stop        
}
catch{
    "Installing powershell-yaml"
    Install-Module -Name powershell-yaml -Repository PSGallery
}
try{
    $test = Get-Command "ConvertFrom-Yaml" -ErrorAction Stop
}
catch{
    "Couldn't install powershell-yaml for some reason"
    exit
}
function Format-Json ($JSON)
{
    $PrettifiedJSON = ($JSON) | convertfrom-json | convertto-json -depth 100 | ForEach-Object { [System.Text.RegularExpressions.Regex]::Unescape($_) }
    $PrettifiedJSON
}

$y = ((Get-Content $PSScriptRoot/config.yml) | ConvertFrom-Yaml )
$j = ConvertTo-Yaml -JsonCompatible $y
if ($pretty.IsPresent){
    Format-Json $j
}
else{
    $j
}


