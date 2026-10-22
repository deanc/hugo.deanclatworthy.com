// Keep the static base price if Paddle is blocked or its preview is unavailable.
(async () => {
  const product = document.querySelector("[data-paddle-price-id]");
  if (!product || !window.Paddle) return;

  try {
    const priceId = product.dataset.paddlePriceId;
    window.Paddle.Initialize({ token: product.dataset.paddleClientToken });
    // Omitting location and currency lets Paddle use the visitor's IP address
    // and the same currency conversions/overrides as our hosted checkout.
    const result = await window.Paddle.PricePreview({
      items: [{ priceId, quantity: 1 }],
    });
    const item = result.data?.details?.lineItems?.find((line) => line.price.id === priceId);
    const price = item?.formattedTotals?.total;
    const currency = result.data?.currencyCode;
    if (!price || !currency) return;

    product.querySelectorAll("[data-product-price]").forEach((element) => {
      element.textContent = price;
    });
    product.querySelector("[data-product-price-note]").textContent =
      `Estimated total in ${currency}. Final price and tax confirmed at checkout.`;
  } catch (_) {
    // Checkout remains available via the existing licensing service.
  }
})();
