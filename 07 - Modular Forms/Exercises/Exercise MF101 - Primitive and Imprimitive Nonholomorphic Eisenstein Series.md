---
title: "Exercise MF101: Primitive and Imprimitive Nonholomorphic Eisenstein Series"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.10, Exercise 4.10.1, printed pp. 153–154, PDF pp. 167–168"
source_refs:
  - "S7/ch-4/sec-10/ex-1"
created: 2026-10-28
---

# Exercise MF101: Primitive and Imprimitive Nonholomorphic Eisenstein Series

## Problem Statement

> [!question] Original Exercise 4.10.1
> (a) Find relations like(4.5) and(4.6) expressing each $G_k^{\bar v}$ as a linear combination of the $E_k^{\bar v}$ and vice versa.
>
> (b) Verify that $G_k^{\bar v}$ transforms under $\operatorname{SL}_2(\mathbb Z)$ the same way as $E_k^{\bar v}$.
>
> (c) Show that meromorphic continuation of either sort gives meromorphic continuation of the other.
>
> Here $\bar v$ has order $N$, $\epsilon_N=1/2$ for $N=1,2$ and one otherwise, and
> $$
> E_k^{\bar v}(\tau,s)=\epsilon_N\sum_{\substack{(c,d)\equiv\bar v\ (N)\\\gcd(c,d)=1}}\frac{y^s}{(c\tau+d)^k|c\tau+d|^{2s}},\quad
> G_k^{\bar v}(\tau,s)=\sum_{(c,d)\equiv\bar v\ (N)}'\frac{y^s}{(c\tau+d)^k|c\tau+d|^{2s}},
> $$
> initially for $\operatorname{Re}(k+2s)>2$.

## Hints

> [!hint]- Hint 1
> Extract the positive gcd of $(c,d)$; it is coprime to $N$.

> [!hint]- Hint 2
> Möbius inversion supplies the reverse relation; group all scalar multipliers modulo $N$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $w=k+2s$. Every nonzero integer pair has a unique expression $m(c_0,d_0)$ with $m>0$ and primitive $(c_0,d_0)$. If its residue has order $N$, then $\gcd(m,N)=1$, since a prime dividing both would prevent order $N$. Absolute convergence for $\operatorname{Re}w>2$ permits regrouping, yielding
> $$
> G_k^{\bar v}=\epsilon_N^{-1}\sum_{\substack{m\ge1\\\gcd(m,N)=1}}m^{-w}E_k^{m^{-1}\bar v},\qquad
> E_k^{\bar v}=\epsilon_N\sum_{\substack{m\ge1\\\gcd(m,N)=1}}\mu(m)m^{-w}G_k^{m^{-1}\bar v}.
> $$
> The second identity follows by substitution: the coefficient for total scalar $r$ is $\sum_{m\mid r}\mu(m)$, equal to one for $r=1$ and zero otherwise. Grouping $m$ by the finitely many unit residue classes expresses both as finite linear combinations; the coefficients are the residue-class Dirichlet series $\sum_{m\equiv t}m^{-w}$ and their Möbius analogues.
>
> **(b)** For $\gamma\in\operatorname{SL}_2(\mathbb Z)$, substitution of row vectors $(c,d)\mapsto(c,d)\gamma$ gives $G_k^{\bar v}[\gamma]_k=G_k^{\bar v\gamma}$: use $\operatorname{Im}(\gamma\tau)=y/|c_\gamma\tau+d_\gamma|^2$ and cancel its absolute automorphy factors. This bijection preserves nonzero pairs and primitivity, so it also proves the same identity for $E$.
>
> **(c)** The finite coefficient matrix in the first relation is meromorphic in $w$: its entries are finite combinations of Hurwitz zeta functions, or equivalently Dirichlet $L$-functions. It is invertible in a right half-plane, since the absolutely convergent Möbius relation gives its inverse. Its determinant is thus not identically zero, and the adjugate formula gives a meromorphic inverse throughout the plane. Consequently either family continues meromorphically if the other does. Equivalently, finite character expansion makes the inverse coefficients reciprocal Dirichlet $L$-functions. Zeros of these functions cause at most meromorphic poles, so they do not obstruct continuation. Identities initially established in the convergence region persist by uniqueness.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 153–154 / PDF 167–168. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
