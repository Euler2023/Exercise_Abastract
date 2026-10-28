---
title: "Exercise LA593: Inversion as a Local Half-Turn"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.2, Exercise 2.2.2, printed p. 52, PDF p. 67"
source_refs:
  - "S7/ch-2/sec-2/ex-2"
created: 2026-10-28
---

# Exercise LA593: Inversion as a Local Half-Turn

## Problem Statement

> [!question] Original Exercise 2.2.2
> Compute
> $$
> \begin{bmatrix}1&-i\\1&i\end{bmatrix}
> \begin{bmatrix}0&-1\\1&0\end{bmatrix}
> \begin{bmatrix}1&-i\\1&i\end{bmatrix}^{-1}
> $$
> and explain how this shows that the map $\gamma(\tau)=-1/\tau$ acts in the small as $180$-degree rotation about $i$.

## Hints

> [!hint]- Hint 1
> The first matrix represents $\delta(\tau)=(\tau-i)/(\tau+i)$, which sends $i$ to $0$.

> [!hint]- Hint 2
> First multiply the first two matrices. Compare the result with $\operatorname{diag}(-i,i)\begin{bmatrix}1&-i\\1&i\end{bmatrix}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent matrix calculation and its fractional-linear interpretation.
>
> Write
> $$
> D=\begin{pmatrix}1&-i\\1&i\end{pmatrix},\qquad
> S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.
> $$
> Since $\det D=2i\ne0$,
> $$
> D^{-1}=\frac1{2i}\begin{pmatrix}i&i\\-1&1\end{pmatrix}
> =\frac12\begin{pmatrix}1&1\\i&-i\end{pmatrix}.
> $$
> Direct multiplication gives
> $$
> DS=\begin{pmatrix}-i&-1\\i&-1\end{pmatrix},\qquad
> DSD^{-1}=\begin{pmatrix}-i&0\\0&i\end{pmatrix}.
> $$
> The diagonal matrix on the right acts on the coordinate $z$ by
> $$
> z\longmapsto\frac{-iz}{i}=-z.
> $$
> The map $\delta(\tau)=(\tau-i)/(\tau+i)$ sends $\mathcal H$ biholomorphically onto the unit disk: for $\tau=x+iy$ with $y>0$,
> $$
> |\tau+i|^2-|\tau-i|^2=4y>0,
> $$
> and its inverse is $\tau=i(1+z)/(1-z)$, which has positive imaginary part for $|z|<1$. In particular, $\delta(i)=0$. The matrix computation therefore says exactly
> $$
> \delta\circ\gamma\circ\delta^{-1}(z)=-z.
> $$
> Thus in the local coordinate centered at $i$, the involution induced by $S$ is an exact half-turn about $0$. Equivalently, in the original coordinate its derivative at $i$ is $\gamma'(i)=1/i^2=-1$, and
> $$
> \gamma(i+\varepsilon)=i-\varepsilon+O(\varepsilon^2).
> $$
> This explains the phrase “in the small”: the Euclidean displacement from $i$ is reversed to first order, while the straightened disk coordinate makes the rotation exact.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** All three printed matrices, including the signs in the straightening matrix, were checked on the 200 dpi image of printed p. 52 / PDF p. 67. The local-coordinate construction is on printed pp. 49–50 / PDF pp. 64–65.
- **Boundary:** The map $\tau\mapsto-1/\tau$ is not literally a Euclidean half-turn on an entire neighborhood in the original $\tau$-plane. It is conjugate to one in the displayed coordinate. The matrix $S$ has order $4$, whereas its fractional linear action has order $2$ because $S^2=-I$ acts trivially.
- **Routing:** Matrix inversion, multiplication and conjugation are the principal calculations, so the note belongs to Linear Algebra and Modules.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
