---
title: "Exercise R431: Gaussian Ideals and Period Two Elliptic Points"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.7, Exercise 3.7.5, printed p. 97, PDF p. 111"
source_refs:
  - "S7/ch-3/sec-7/ex-5"
created: 2026-10-28
---

# Exercise R431: Gaussian Ideals and Period Two Elliptic Points

## Problem Statement

> [!question] Original Exercise 3.7.5
> (a) Similarly to the methods of the section, check that the first half of Proposition3.7.1 holds.
>
> (b) Prove the first half of Corollary3.7.2. (A hint for this exercise is at the end of the book.)
>
> The first assertion is a bijection between period-two elliptic points of $\Gamma_0(N)$ and ideals $J\subset\mathbb Z[i]$ with $\mathbb Z[i]/J\cong\mathbb Z/N\mathbb Z$ as additive groups. The counting formula is
> $$
> \varepsilon_2(\Gamma_0(N))=\begin{cases}\prod_{p\mid N}(1+(\frac{-1}{p}))&4\nmid N,\\0&4\mid N,\end{cases}
> $$
> where the symbol is $1,-1,0$ for $p\equiv1\pmod4$, $p\equiv3\pmod4$, $p=2$, respectively.

## Hints

> [!hint]- Hint 1
> A cyclic additive quotient ring of order $N$ is the unital ring $\mathbb Z/N\mathbb Z$. Its image of $i$ is a root of $x^2+1$.

> [!hint]- Hint 2
> Count those roots prime power by prime power, then use the Chinese remainder theorem.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> We give an explicit route through roots, which also proves the desired bijection without choosing an ideal generator. If a finite unital ring $R$ has cyclic additive group of order $N$, its identity generates that group. Indeed, write $1=mt$ for an additive generator $t$ and $t^2=at$; then $t=1t=ma\,t$, so $ma\equiv1\pmod N$ and $m$ is a unit. Thus $R$ is canonically $\mathbb Z/N\mathbb Z$ as a unital ring. Applied to $\mathbb Z[i]/J$, its image of $i$ is a unique root $r^2+1\equiv0\pmod N$. Conversely each root gives the ideal $J_r=(N,i-r)$ and quotient $\mathbb Z/N\mathbb Z$. These operations are inverse.
>
> To identify the same roots with elliptic points, let $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$. A point over the full-level elliptic point $i$ has representative $\alpha i$, and it has period two under $\Gamma_0(N)$ exactly when its left coset $\Gamma_0(N)\alpha$ is fixed by right multiplication by $S$. Left cosets are parametrized by primitive bottom rows $(c,d)$ modulo $N$, up to multiplication by units: equality follows from the lower-left entry $cd'-dc'$ of $\alpha\alpha'^{-1}$, with a primitive row completing to an invertible matrix. A fixed row satisfies $(d,-c)=u(c,d)$ for a unit $u$. The relation $d=uc$ implies that $c$ is a unit, and then $d$ is a unit too. Normalize to $(r,1)$; the fixed condition is exactly $r^2+1=0$. Since a fixed coset has a one-point orbit under the stabilizer of $i$, distinct roots give distinct elliptic points, and all such points arise this way. This proves(a), with explicit representative $(r+i)/(r^2+1)$ when the denominator is nonzero; the group-orbit formula also covers $N=1$.
>
> **(b)** For odd $p$, a root modulo $p$ exists precisely when $-1$ is a square, namely $p\equiv1\pmod4$, and then there are two. This uses the cyclicity of $\mathbb F_p^\times$. Each lifts uniquely to every $p^e$: if $r$ is a root mod $p^e$, a lift $r+tp^e$ is a root mod $p^{e+1}$ exactly when $(r^2+1)/p^e+2rt\equiv0\pmod p$, which uniquely determines $t$ because $2r$ is a unit. Modulo two there is one root, but modulo four neither even nor odd squares are $-1$. The Chinese remainder theorem multiplies these local counts. They are zero if $4\mid N$, and otherwise are the product stated in the question.

## Related Concepts

- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 97 / PDF 111. The solution above is independently derived.
- **Routing:** The principal toolkit is ring-theory; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
