import polars as pl

id = "16aV2zm-d8nAh7Njb4ENq-AJaqW2Us7WhNiHJYzPvpzE"
url = f"https://docs.google.com/spreadsheets/d/{id}/gviz/tq?tqx=out:csv&sheet=ja_jp"
df = pl.read_csv(
    "table.csv",
    new_columns=["type", "rank", "pos", "effect", "value", "p", "p_improved"],
)

(
    df.with_columns(pl.col("p", "p_improved").str.replace("%", "").cast(float))
    .group_by(["type", "rank", "pos"])
    .agg(pl.col("p", "p_improved").sum())
    .filter((pl.col("p") != 100.0) | (pl.col("p_improved") != 100.0))
    .pipe(print)
)

(
    df.with_columns(
        pl.col("p", "p_improved").str.replace("%", "").cast(float).cast(str).add("%")
    ).write_json("table.json", row_oriented=True)
)
