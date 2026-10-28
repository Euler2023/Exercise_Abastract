---
title: "Exercise MF96: Normal Convergence of the Lattice Theta Series"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.9, Exercise 4.9.2, printed pp. 146–147, PDF pp. 160–161"
source_refs:
  - "S7/ch-4/sec-9/ex-2"
created: 2026-10-28
---

# Exercise MF96: Normal Convergence of the Lattice Theta Series

## Problem Statement

> [!question] Original Exercise 4.9.2
> This exercise shows that $\vartheta(\tau,l)=\sum_{n\in\mathbb Z^l}e^{\pi i|n|^2\tau}$ is holomorphic.
>
> (a) Let $S_m=\{n\in\mathbb Z^l:|n|=m\}$ for each natural number $m$. Show $|S_m|\le(2m+1)^l$.
>
> (b) Let $K\subset\mathcal H$ be compact, and choose $y_0>0$ with $\operatorname{Im}\tau\ge y_0$ on $K$. Show that for $\tau\in K$, $n\in S_m$, $|e^{\pi i|n|^2\tau}|\le e^{-\pi m^2y_0}$.
>
> (c) There is $M_0$ such that for $m\ge M_0$, $(2m+1)^l<e^m$ and $\pi m^2y_0>2m$. Show that for $\tau\in K$, $M\ge M_0$, the tail satisfies
> $$
> \sum_{|n|\ge M}|e^{\pi i|n|^2\tau}|\le\sum_{m=M}^\infty e^{-m}=e^{-M}(1-e^{-1})^{-1}.
> $$
> This proves absolute locally uniform convergence, and hence holomorphy.

> [!warning] Source issue
> For $l>1$ the printed $S_m$ do not exhaust $\mathbb Z^l$: for example $(1,1)$ has length $\sqrt2$. Thus(a,b) are true, but their proposed use in(c) omits vectors. The corrected proof below uses annular shells and replaces $(2m+1)^l$ by $(2m+3)^l$ when choosing $M_0$.

## Hints

> [!hint]- Hint 1
> The printed shells omit lattice vectors with noninteger Euclidean length.

> [!hint]- Hint 2
> Replace them by $m\le|n|<m+1$; increase $M_0$ for their slightly larger cardinality bound.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** If $|n|=m$, every integer coordinate lies in $[-m,m]$, a set of $2m+1$ possibilities. The asserted bound follows by placing the shell in that cube.
>
> **(b)** The absolute value equals $e^{-\pi|n|^2\operatorname{Im}\tau}$, which is at most $e^{-\pi m^2y_0}$.
>
> **(c), with corrected shells.** Use $A_m=\{n:m\le|n|<m+1\}$. Each is contained in the cube with coordinates between $-(m+1)$ and $m+1$, so $|A_m|\le(2m+3)^l$. Since exponential growth dominates any fixed polynomial, enlarge $M_0$ until $(2m+3)^l\le e^m$ and $\pi m^2y_0\ge2m$ for every $m\ge M_0$. Then every integer $M\ge M_0$ satisfies
> $$
> \sum_{|n|\ge M}|e^{\pi i|n|^2\tau}|
> =\sum_{m\ge M}\sum_{n\in A_m}e^{-\pi|n|^2\operatorname{Im}\tau}
> \le\sum_{m\ge M}(2m+3)^le^{-\pi m^2y_0}
> \le\sum_{m\ge M}e^{-m}.
> $$
> The geometric tail tends to zero uniformly on $K$. Finite partial sums are holomorphic, so the Weierstrass theorem on locally uniform limits proves holomorphy. This proves the stated final conclusion and tail estimate after the necessary enlargement of $M_0$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 146–147 / PDF 160–161. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
