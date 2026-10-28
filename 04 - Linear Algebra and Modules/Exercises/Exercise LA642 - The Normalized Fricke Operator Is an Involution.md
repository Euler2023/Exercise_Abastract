---
title: "Exercise LA642: The Normalized Fricke Operator Is an Involution"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.10, Exercise 5.10.2, printed p. 210, PDF p. 224"
source_refs:
  - "S7/ch-5/sec-10/ex-2"
created: 2026-10-28
---

# Exercise LA642: The Normalized Fricke Operator Is an Involution

## Problem Statement

> [!question] Original Exercise 5.10.2
> Show that $W_N$ is an involution.
>
> The normalized Fricke operator is
> $$
> W_Nf=i^kN^{1-k/2}f\left[\begin{pmatrix}0&-1\\N&0\end{pmatrix}\right]_k,
> \qquad (W_Nf)(\tau)=i^kN^{-k/2}\tau^{-k}f(-1/(N\tau)).
> $$

## Hints

> [!hint]- Hint 1
> The matrix squares to $-NI$.

> [!hint]- Hint 2
> In this book's slash convention, a scalar matrix $aI$ acts by $a^{k-2}$. Retain both factors $(-1)^k$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $J_N=\left(\begin{smallmatrix}0&-1\\N&0\end{smallmatrix}\right)$. It conjugates $\Gamma_1(N)$ to itself and permutes rational cusps, so its slash operator preserves the indicated cusp space. Direct multiplication gives $J_N^2=-NI$.
>
> For a real nonzero scalar $a$, the slash definition gives
> $$
> f[aI]_k=(a^2)^{k-1}a^{-k}f=a^{k-2}f.
> $$
> The slash composition law thus yields
> $$
> W_N^2=i^{2k}N^{2-k}[J_N^2]_k=(-1)^kN^{2-k}(-N)^{k-2}I=I,
> $$
> because $(-1)^k(-1)^{k-2}=1$. Alternatively, substituting the explicit function formula twice cancels the powers of $N$ and $\tau$ and gives $i^{2k}(-1)^{-k}f=f$. Hence the involution assertion holds in odd as well as even weight, with no choice of square root of $N$ beyond its positive real power.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.10.2, printed p. 210 / PDF p. 224]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked definition:** The precise normalization of $W_N$ is on printed p.209/PDF p.223. It differs by an essential scalar from the unnormalized Fricke slash operator, whose square need not be the identity.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
