<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>Radar Tech | Éderson Fernandes</title>

    <link rel="stylesheet" href="style.css">
</head>

<body class="text-center my-body-index">
    <main class="my-form-username">
        <form action="radar-tech.php" method="POST">
            <i class="fas fa-tachometer-alt fa-5x mb-3"></i>
            <h1 class="h3 mb-3 fw-normal">Radar Tech</h1>

            <div class="form-floating">
                <input type="text" class="form-control" id="username" name="username" placeholder="@your-github">
                <label for="username">@your-github</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Play</button>

            <p class="mt-5 mb-3 text-muted">&copy; 2021–<?= date("Y") ?></p>
        </form>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>