defmodule FreelancerRates do
  def daily_rate(hourly_rate) do
    hourly_rate * 8.0
  end
  def apply_discount(before_discount, discount) do
    before_discount - (discount * 0.01) * before_discount
  end
  def monthly_rate(hourly_rate, discount) do
    m_rate = 22 * daily_rate(hourly_rate)
    m_rate |> apply_discount(discount) |> Float.ceil(0) |> trunc()
  end
  def days_in_budget(budget, hourly_rate, discount) do
    budget / (daily_rate(hourly_rate) |> apply_discount(discount)) |> Float.floor(1)
  end
end
