---
title: "Exercise MF19: Special Values of the Modular Invariant at Elliptic Points"
topic: modular-forms
difficulty: beginner
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.1, Exercise 1.1.8, printed p. 10, PDF p. 25"
source_refs:
  - "S7/ch-1/sec-1/ex-8"
created: 2026-10-24
---

# Exercise MF19: Special Values of the Modular Invariant at Elliptic Points

## Problem Statement

> [!question] Exercise 1.1.8
> Recall that $\mu_3$ denotes the complex cube root of unity $e^{2\pi i/3}$. Show that $\begin{pmatrix}0&-1\\1&0\end{pmatrix}(\mu_3)=\mu_3+1$ so that by periodicity $g_2\left(\begin{pmatrix}0&-1\\1&0\end{pmatrix}(\mu_3)\right)=g_2(\mu_3)$. Show that by modularity also $g_2\left(\begin{pmatrix}0&-1\\1&0\end{pmatrix}(\mu_3)\right)=\mu_3^4g_2(\mu_3)$ and therefore $g_2(\mu_3)=0$. Conclude that $g_3(\mu_3)\ne0$ and $j(\mu_3)=0$. Argue similarly to show that $g_3(i)=0$, $g_2(i)\ne0$, and $j(i)=1728$.


## Hints

> [!hint]- Hint 1
> Use $\mu_3^2+\mu_3+1=0$ and the weight-four and weight-six transformation laws under $S:\tau\mapsto-1/\tau$.

> [!hint]- Hint 2
> To deduce the other invariant is nonzero, use the source theorem that $\Delta=g_2^3-27g_3^2$ has no zero in $\mathcal H$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> The source definitions are $g_2=60G_4$, $g_3=140G_6$, $\Delta=g_2^3-27g_3^2$ and $j=1728g_2^3/\Delta$ [S7, printed pp. 6–7, PDF pp. 21–22]. We use Corollary 1.4.2: $\Delta(\tau)\ne0$ for every $\tau\in\mathcal H$ [S7, printed p. 34, PDF p. 49]. Its proof invokes the distinct roots in Proposition 1.4.1(c), stated on printed p. 32 / PDF p. 47, with a source proof sketch on printed p. 33 / PDF p. 48. This is a named later input rather than a consequence of transformation laws alone.
>
> Since $\mu_3^3=1$ and $\mu_3\ne1$,
> $$
> S\mu_3=-\frac1{\mu_3}=-\mu_3^2=\mu_3+1.
> $$
> Periodicity gives $g_2(S\mu_3)=g_2(\mu_3)$, while the weight-four law gives $g_2(S\mu_3)=\mu_3^4g_2(\mu_3)=\mu_3g_2(\mu_3)$. Hence $(1-\mu_3)g_2(\mu_3)=0$, so $g_2(\mu_3)=0$. Nonvanishing of $\Delta(\mu_3)=-27g_3(\mu_3)^2$ gives $g_3(\mu_3)\ne0$, and the formula for $j$ gives $j(\mu_3)=0$.
>
> Similarly $Si=i$ and the weight-six law gives
> $$
> g_3(i)=g_3(Si)=i^6g_3(i)=-g_3(i),
> $$
> so $g_3(i)=0$. Then $\Delta(i)=g_2(i)^3\ne0$, implying $g_2(i)\ne0$ and
> $$
> j(i)=1728\frac{g_2(i)^3}{g_2(i)^3}=1728.
> $$

## Related Concepts

- [[07 - Modular Forms/Concepts/j-Invariant|j-Invariant]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]

## Notes

- **Dependency:** Modular transformation laws force the two vanishings, but the two nonvanishing statements additionally require that $\Delta$ is nonzero on $\mathcal H$. That later source input is stated visibly in the solution.
- **Normalization:** Here $\Delta$ is the source's $g_2^3-27g_3^2=(2\pi)^{12}\Delta_{\mathrm{norm}}$. The nonvanishing and the values of $j$ are unaffected by this explicitly fixed normalization.

- **Source and proof status:** The complete numbered exercise was checked against the original PDF at [S7, Ch. 1, §1.1, Exercise 1.1.8, printed p. 10, PDF p. 25]. The solution is an independent derivation in this vault; named external inputs are identified above.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 1|Diamond–Shurman Chapter 1]]. Learning status remains `not-started`.
