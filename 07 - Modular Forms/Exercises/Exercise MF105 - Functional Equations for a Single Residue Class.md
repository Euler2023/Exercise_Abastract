---
title: "Exercise MF105: Functional Equations for a Single Residue Class"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.10, Exercise 4.10.7, printed p. 155, PDF p. 169"
source_refs:
  - "S7/ch-4/sec-10/ex-7"
created: 2026-10-28
---

# Exercise MF105: Functional Equations for a Single Residue Class

## Problem Statement

> [!question] Original Exercise 4.10.7
> What does Theorem4.10.2 say when $a$ picks off one vector, i.e. $a=a_v$ with $a_v(w)=1$ if $w=v$ and zero otherwise?

> [!warning] Source issue
> Theorem 4.10.2 has a negative odd-weight sign issue, derived in [[07 - Modular Forms/Exercises/Exercise MF104 - Analytic Continuation in Zero and Negative Weight|Exercise 4.10.6]]. Its printed coefficient combination has root number $(-1)^k$ when $k<0$, rather than unconditional symmetry. The point-mass calculation below uses the corrected scope.

## Hints

> [!hint]- Hint 1
> The finite transform of a point mass is a single additive character divided by $N$.

> [!hint]- Hint 2
> Insert that transform in the symmetrized coefficient formula(4.46).

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The definition immediately gives $\widehat a_v(w)=N^{-1}\mu_N^{-\langle v,wS\rangle}$ and $\widehat a_v(-w)=N^{-1}\mu_N^{\langle v,wS\rangle}$. Thus the symmetrized series is
> $$
> G_k^{a_v}(\tau,t)=G_k^v(\tau,t)+\frac{(-1)^k}{N}\sum_{w\in G}\mu_N^{\langle v,wS\rangle}G_k^w(\tau,t).
> $$
> For fixed $\tau$, its completed function
> $$
> (\pi/N)^{-s}\Gamma(|k|/2+s)\left[G_k^v(\tau,s-k/2)+\frac{(-1)^k}{N}\sum_w\mu_N^{\langle v,wS\rangle}G_k^w(\tau,s-k/2)\right]
> $$
> is entire for $k\ne0$. It is invariant under $s\mapsto1-s$ for $k>0$ and for negative even $k$; for negative odd $k$ it instead changes sign. This is the corrected negative-weight conclusion proved in Exercise 4.10.6. At $k=0$ its residues at zero and one are respectively $-C,C$, with $C=\mathbf1_{v=0}+1/N$, by the constant-term calculation of4.10.6; thus both are genuine simple poles in this point-mass case. For $k<0$, replacing the printed factor $(-1)^k/N$ by $1/N$ gives a scalar symmetric combination in every negative weight. It does not assert that the single unsymmetrized residue-class series alone is invariant under $s\mapsto1-s$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 155 / PDF 169. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
