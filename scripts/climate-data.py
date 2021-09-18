import json
import pandas as pd


def main():
    df = pd.read_csv("../data/stats/data.csv")

    # Only need last year's data 
    filtered_df = df.loc[df["Time"] == 2020]

    # Create nested JSON object with primary key as country name
    data_out = {}
    cols = ["Series Name", "Time", "Value"]
    for index, row in filtered_df.iterrows():
        country = row["Country Name"]
        code = row["Series Code"]
        if data_out.get(country) is None:
            data_out[country] = {} 
        if data_out[country].get(code) is None:
            data_out[country][code] = {}
        for col in cols:
            data_out[country][code][col] = row[col]

    with open("../data/climate-data.json", "w") as out:
        json.dump(data_out, out, indent=4)


if __name__ == "__main__":
    main()

