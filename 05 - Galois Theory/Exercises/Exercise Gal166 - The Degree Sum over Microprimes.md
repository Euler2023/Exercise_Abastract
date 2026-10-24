---
title: 'Exercise Gal166: The Degree Sum over Microprimes'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 2, printed p. 290, PDF p. 309
source_refs:
- S4/ch-IV/sec-4/ex-2
created: '2026-10-23'
---

# Exercise Gal166: The Degree Sum over Microprimes

## Problem Statement

> [!question] Neukirch IV.4.2
> For a finite extension $L|K$ and a microprime $\mathfrak P\mid\mathfrak p$ of $L$, let $f_{\mathfrak P\mid\mathfrak p}=d(\mathfrak P)/d(\mathfrak p)$. Show that
> $$
> \sum_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}=[L:K].
> $$

## Hints

> [!hint]- Hint 1
> Use the double-coset description from the preceding exercise. The number $f_{\mathfrak P\mid\mathfrak p}$ is the length of the corresponding orbit of a primitive Frobenius element on the finite coset space.

> [!hint]- Hint 2
> The sum of the lengths of disjoint orbits is the size of the entire coset space.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Under the hypotheses of the preceding exercise, choose a primitive Frobenius element $s$ in $G_K$ representing the microprime downstairs, and write $H=G_L$ and $C=\overline{\langle s\rangle}$. The right action $s$ partitions the finite left-coset set $H\backslash G_K$ into orbits indexed by $H\backslash G_K/C$.
>
> In the orbit $HgC$, the least return time is $f_g>0$, and the primitive representative of the corresponding microprime upstairs is $g s^{f_g}g^{-1}\in H$. Since $d$ is a homomorphism to an abelian group, conjugation preserves $d$. Thus
> $$
> \frac{d(g s^{f_g}g^{-1})}{d(s)}=f_g.
> $$
> This is the quantity $f_{\mathfrak P\mid\mathfrak p}$ in the statement. All the orbits form a disjoint partition, so
> $$
> \sum_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}
> =\sum_{HgC}\#(HgC/H)=\#(H\backslash G_K)=[G_K:H]=[L:K].
> $$
> Thus these ratios are positive integers, not merely positive rational numbers. The formula counts return times of microprime Frobenius orbits. It must not be directly identified with the single inertia degree defined for the entire extension by $d(G_K):d(G_L)$ at the beginning of the chapter.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[01 - Group Theory/Concepts/Group Actions|Finite Coset Actions]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Galois Groups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 2, printed p. 290, PDF p. 309]. Independent orbit count. The preceding exercise proves the bijection between microprimes and orbits.
