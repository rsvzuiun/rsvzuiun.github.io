import polars as pl

id = "1tIB2PEehDvqhvY9SpL-WNto7iaePYK5O5MSwpHNMkNA"
url = f"https://docs.google.com/spreadsheets/d/{id}/gviz/tq?tqx=out:csv&sheet=ja_jp"
df = (
    pl.read_csv(
        url,
        columns=range(6),
        new_columns=["type", "rank", "pos", "effect", "value", "p"],
    )
    .with_columns(pl.col("p").cast(str).str.replace("%", "").cast(float))
)

(
    df
    .group_by(["type", "rank", "pos"])
    .agg(pl.col("p").sum())
    .filter((pl.col("p").sub(100).abs() > 1e-13))
    .pipe(print)
)

(
    df.with_columns(
        pl.col("p").cast(str).add("%")
    ).write_json("replica-table.json", row_oriented=True)
)
