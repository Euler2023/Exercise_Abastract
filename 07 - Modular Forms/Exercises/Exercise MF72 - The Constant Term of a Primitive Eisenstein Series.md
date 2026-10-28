---
title: "Exercise MF72: The Constant Term of a Primitive Eisenstein Series"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.2, Exercise 4.2.3, printed p. 115, PDF p. 129"
source_refs:
  - "S7/ch-4/sec-2/ex-3"
created: 2026-10-28
---

# Exercise MF72: The Constant Term of a Primitive Eisenstein Series

## Problem Statement

> [!question] Original Exercise 4.2.3
> Establish the formula in the section for $\lim_{\operatorname{Im}\tau\to\infty}E_k^{\overline v}(\tau)$.
>
> The formula says the limit is $(\pm1)^k$ when $\overline v=\pm\overline{(0,1)}$, except that it is zero for odd $k$ and $N\in\{1,2\}$; it is zero for all other $\overline v$. Here $k\ge3$ and $\overline v$ has order $N$.

## Hints

> [!hint]- Hint 1
> Among primitive pairs with $c=0$, the only possibilities are $(0,1)$ and $(0,-1)$.

> [!hint]- Hint 2
> Justify passing the limit through the other terms by an absolutely convergent lattice bound, with the real part reduced to a bounded interval.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The series is periodic with period $N$, so reduce $x=\operatorname{Re}\tau$ to $[0,N]$. For $y\ge1$, the positive quadratic form $(cx+d)^2+c^2y^2$ is bounded below by $C_N(c^2+d^2)$ uniformly in $x\in[0,N]$: for $y=1$ the least eigenvalue is a positive continuous function of $x$ on a compact interval, and increasing $y$ only increases the form. Thus
> $$
> |(c\tau+d)^{-k}|\le C_N^{-k/2}(c^2+d^2)^{-k/2}.
> $$
> The right side is summable over nonzero integer pairs when $k>2$, by grouping pairs in annuli of integer radii. Each term with $c\ne0$ tends to zero as $y\to\infty$, uniformly after this dominated-sum argument. The only surviving primitive rows are $(0,1)$ and $(0,-1)$, giving the exact limit
> $$
> \epsilon_N\bigl(\boldsymbol1_{\overline v=\overline{(0,1)}}+(-1)^k\boldsymbol1_{\overline v=-\overline{(0,1)}}\bigr).
> $$
> For $N>2$ the two residue vectors are distinct and $\epsilon_N=1$, so their respective values are $1$ and $(-1)^k$. For $N=1,2$ they coincide and $\epsilon_N=1/2$, giving $(1+(-1)^k)/2$, equal to $1$ for even $k$ and $0$ for odd $k$. If neither residue condition holds, the limit is zero. This is precisely the source's formula, including its exceptional sign case.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.2.3, printed p. 115 / PDF p. 129]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Expanded source reference:** The limit formula is on printed p.112/PDF p.126. The argument verifies interchange of the limit and the infinite sum instead of only formally dropping all terms with $c\ne0$.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
