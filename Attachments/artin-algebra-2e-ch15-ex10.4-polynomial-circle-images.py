"""Generate the visualization archived with Artin Chapter 15, Exercise 10.4.

Run from Windows with:
    wsl -d Ubuntu-20.04 sage -python /mnt/e/project/leandojo/exercise_abstract/Attachments/artin-algebra-2e-ch15-ex10.4-polynomial-circle-images.py
"""

from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np


COEFFICIENTS = np.array([1, 0, -3, 1], dtype=complex)
RADII = [0.35, 0.75, 1.00, 1.15, 1.50, 2.20]
SAMPLES = 2400


def polynomial(z):
    return np.polyval(COEFFICIENTS, z)


theta = np.linspace(0, 2 * np.pi, SAMPLES + 1)
critical_points = np.roots(np.polyder(COEFFICIENTS))
critical_values = polynomial(critical_points)

fig, axes = plt.subplots(2, 3, figsize=(13.5, 8.5))
for ax, radius in zip(axes.flat, RADII):
    z = radius * np.exp(1j * theta)
    image = polynomial(z)
    ax.plot(image.real, image.imag, color="#1368aa", linewidth=2.0)
    ax.scatter([0], [0], color="black", s=18, zorder=4)
    if np.isclose(radius, 1.0):
        ax.scatter(
            critical_values.real,
            critical_values.imag,
            color="#c43c39",
            s=42,
            zorder=5,
        )
        ax.annotate(
            r"$-1=f(1)$",
            xy=(-1, 0),
            xytext=(-28, 13),
            textcoords="offset points",
            color="#9c2f2d",
            fontsize=9,
        )
        ax.annotate(
            r"$3=f(-1)$",
            xy=(3, 0),
            xytext=(7, 13),
            textcoords="offset points",
            color="#9c2f2d",
            fontsize=9,
        )
        ax.annotate(
            r"$0$",
            xy=(0, 0),
            xytext=(5, 6),
            textcoords="offset points",
            color="black",
            fontsize=9,
        )
    ax.axhline(0, color="#d0d0d0", linewidth=0.8, zorder=0)
    ax.axvline(0, color="#d0d0d0", linewidth=0.8, zorder=0)
    ax.set_aspect("equal", adjustable="datalim")
    ax.set_title(rf"$r={radius:.2f}$")
    ax.set_xlabel(r"$\operatorname{Re} f(z)$")
    ax.set_ylabel(r"$\operatorname{Im} f(z)$")
    ax.grid(alpha=0.16)

fig.suptitle(
    r"Images $f(C_r)$ for $f(z)=z^3-3z+1$; the critical radius is $r=1$",
    fontsize=16,
)
fig.tight_layout(rect=(0, 0, 1, 0.95))
output = Path(__file__).with_suffix(".png")
fig.savefig(output, dpi=210, bbox_inches="tight", facecolor="white")
print(output)
