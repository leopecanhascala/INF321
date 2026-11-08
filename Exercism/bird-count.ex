defmodule BirdCount do
  def today([]) do
    nil
  end
  def today(list) do
    [head | tail] = list
    head
  end
  def increment_day_count([]) do
    [1]
  end
  def increment_day_count(list) do
    [head | tail] = list
    [head+1 | tail]
  end
  def has_day_without_birds?([]) do
    false
  end
  def has_day_without_birds?(list) do
    cond do
      hd(list) == 0 -> true
      true          -> has_day_without_birds?(tl(list))
    end
  end
  def total([]) do
    0
  end
  def total(list) do
    hd(list) + total(tl(list))
  end
  def busy_days([]) do
    0
  end
  def busy_days(list) do
    cond do
      hd(list) >= 5 -> 1 + busy_days(tl(list))
      true          -> busy_days(tl(list))
    end
  end
end
