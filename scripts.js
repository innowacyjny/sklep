document.getElementById('calculate').addEventListener('click', function () {
  const area = parseFloat(document.getElementById('area').value);
  const coverage = parseFloat(document.getElementById('coverage').value);
  const price = parseFloat(document.getElementById('price').value);

  if (isNaN(area) || isNaN(coverage) || isNaN(price) || coverage <= 0) {
    document.getElementById('result').textContent = 'Podaj prawidłowe wartości.';
    return;
  }

  const litersNeeded = Math.ceil((area / coverage) * 100) / 100;
  const totalCost = Math.round(litersNeeded * price * 100) / 100;

  document.getElementById('result').textContent =
    `Potrzebujesz ${litersNeeded} l farby, koszt: ${totalCost} zł.`;
});

document.querySelectorAll('.buy-button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const price = e.target.getAttribute('data-price');
    document.getElementById('price').value = price;
    window.scrollTo({ top: document.getElementById('kalkulator').offsetTop, behavior: 'smooth' });
  });
});
