---
title: "Exercise MF45: The Transformed Discriminant Product"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.2, Exercise 3.2.6, printed p. 77, PDF p. 91"
source_refs:
  - "S7/ch-3/sec-2/ex-6"
created: 2026-10-28
---

# Exercise MF45: The Transformed Discriminant Product

## Problem Statement

> [!question] Original Exercise 3.2.6
> Verify the expression for $g[S]_{24}$ in the proof of Proposition 3.2.2.
>
> **Referenced expressions, printed p. 75 / PDF p. 89.** Set
> $$
> g(\tau)=(2\pi)^{-24}\Delta(\tau)\Delta(N\tau)
> =q^{N+1}\prod_{n\ge1}(1-q^n)^{24}(1-q^{Nn})^{24},\quad
> S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.
> $$
> The expression to verify, with $q_N=e^{2\pi i\tau/N}$, is
> $$
> (g[S]_{24})(\tau)=N^{-12}g(\tau/N)
> =N^{-12}q_N^{N+1}\prod_{n\ge1}(1-q_N^n)^{24}(1-q_N^{Nn})^{24}.
> $$

## Hints

> [!hint]- Hint 1
> Apply $\Delta(-1/z)=z^{12}\Delta(z)$ first to $z=\tau$, then to $z=\tau/N$.

> [!hint]- Hint 2
> Keep the slash factor $\tau^{-24}$ separate until both weight-$12$ factors have been transformed.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The weight-$12$ modular transformation of $\Delta$ gives
> $$
> \Delta(-1/\tau)=\tau^{12}\Delta(\tau),\qquad
> \Delta(-N/\tau)=(\tau/N)^{12}\Delta(\tau/N).
> $$
> Therefore, using the weight-$24$ slash action,
> $$
> \begin{aligned}
> (g[S]_{24})(\tau)
> &=\tau^{-24}(2\pi)^{-24}\Delta(-1/\tau)\Delta(-N/\tau)\\
> &=N^{-12}(2\pi)^{-24}\Delta(\tau)\Delta(\tau/N)\\
> &=N^{-12}g(\tau/N).
> \end{aligned}
> $$
> In the eta product for $g(z)$ put $z=\tau/N$. Then $e^{2\pi iz}=q_N$ and $e^{2\pi iNz}=q_N^N$. Substitution gives exactly
> $$
> N^{-12}q_N^{N+1}\prod_{n\ge1}(1-q_N^n)^{24}(1-q_N^{Nn})^{24}.
> $$
> In particular, the first nonzero power in this variable is $q_N^{N+1}$, and its coefficient is $N^{-12}$. The calculation is valid for every positive integer $N$, including $N=1$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]
- [[07 - Modular Forms/Concepts/Eta Function|Eta Function]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 77 / PDF 91. The solution above is independently derived.
- **Imported inputs:** The weight-$12$ transformation of the discriminant and its eta product are Chapter 1 results. No eta multiplier formula or unproved modularity of an eta root is required.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
