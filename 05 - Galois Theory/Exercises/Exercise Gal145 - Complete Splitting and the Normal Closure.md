---
title: "Exercise Gal145: Complete Splitting and the Normal Closure"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §9, Exercise 4, printed p. 58, PDF p. 77"
created: 2026-10-20
---

# Exercise Gal145: Complete Splitting and the Normal Closure

## Problem Statement

> [!question] Neukirch I.9.4
> Let $L/K$ be a finite (not necessarily Galois) extension of algebraic number fields and $N/K$ the normal closure of $L/K$. Show that a prime ideal $\mathfrak p$ of $K$ is totally split in $L$ if and only if it is totally split in $N$.
>
> **Printed hint:** Use the double coset decomposition $H\backslash G/G_{\mathfrak P}$, where $G=G(N/K)$, $H=G(N/L)$ and $G_{\mathfrak P}$ is the decomposition group of a prime ideal $\mathfrak P$ over $\mathfrak p$.

## Hints

> [!hint]- Hint 1
> Invert representatives in the printed double cosets to view them as decomposition-group orbits on $G/H$.

> [!hint]- Hint 2
> Show that the orbit belonging to a prime of $L$ has size $ef$. Total splitting therefore means that the decomposition group acts trivially on every coset.

> [!hint]- Hint 3
> The kernel of the action on $G/H$ fixes all conjugate fields $gL$. Their compositum is $N$, so the kernel is trivial.

## Solution

> [!success]- Independent derivation
> We use the following orbit description, including its proof. Let $N/K$ be finite Galois, let $G=\operatorname{Gal}(N/K)$, fix a prime $\mathfrak P$ of its integral closure above $\mathfrak p$, and let $D$ stabilize $\mathfrak P$. For an intermediate field $F$ put $H_F=\operatorname{Gal}(N/F)$. Let $D$ act by left multiplication on $G/H_F$. Its orbits correspond to the primes of $F$ above $\mathfrak p$ via
> $$
> gH_F\longmapsto g^{-1}\mathfrak P\cap F.
> $$
> Multiplication of $g$ on the left by $D$ or on the right by $H_F$ does not change this prime. Every prime occurs by lying over and transitivity of $G$ on primes above $\mathfrak p$. If two such primes of $F$ agree, transitivity of $H_F$ on primes of $N$ above that prime shows that the two representatives lie in the same double coset $DgH_F$. This proves the orbit-prime bijection.
>
> The stabilizer of $gH_F$ is $D\cap gH_Fg^{-1}$, the decomposition group of $\mathfrak P$ for $N/gF$. In a finite Galois extension the decomposition-group order is $ef$, by transitivity and the fundamental identity. Multiplicativity of ramification indices and residue degrees in the tower $N/gF/K$ therefore gives
> $$
> |D\cdot gH_F|
> =\frac{|D|}{|D\cap gH_Fg^{-1}|}
> =e(\mathfrak q_g/\mathfrak p)f(\mathfrak q_g/\mathfrak p),
> \quad \mathfrak q_g=g^{-1}\mathfrak P\cap F.
> $$
> Here conjugation identifies the prime in $gF$ with $\mathfrak q_g$. Thus $\mathfrak p$ is totally split in $F$ if and only if every orbit is a singleton, equivalently if
> $$
> D\subseteq\operatorname{core}_G(H_F)
> :=\bigcap_{g\in G}gH_Fg^{-1}.
> $$
> Indeed all orbit sizes are $1$ exactly when all $e$ and $f$ equal $1$, and the number of cosets is $[F:K]$. This argument is valid over an arbitrary Dedekind base and does not require finite residue fields.
>
> Apply the description to the normal closure $N$ and $F=L$. This is a finite Galois extension because number fields have characteristic zero. Inversion of representatives identifies $D\backslash G/H$ with the printed $H\backslash G/D$, so the argument proves the required interpretation of the printed hint.
>
> The core of $H$ is trivial. Indeed an element of $\bigcap_g gHg^{-1}$ fixes each conjugate field $gL$ pointwise, and these fields generate the normal closure $N$. It must therefore fix every element of $N$ and be the identity.
>
> If $\mathfrak p$ is totally split in $L$, the orbit criterion gives $D\subseteq\operatorname{core}_G(H)=1$. Thus $[G:D]=[N:K]$ and $ef=|D|=1$ in $N$, which is total splitting there. Conversely, total splitting in $N$ gives $D=1$; all its orbits on $G/H$ are singletons, so $\mathfrak p$ is totally split in $L$. Both directions follow without assuming that $L/K$ is itself Galois.

## Related Concepts

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem]]
- [[05 - Galois Theory/Concepts/Galois Extensions]]
- [[01 - Group Theory/Concepts/Group Actions]]

## Notes

- **Source verification:** The complete problem and printed hint was visually checked in [S4, Ch. I, §9, Exercise 4, printed p. 58, PDF p. 77]. No source figure is required.
- **Proof status and inputs:** This is an independent derivation following the printed hint. The orbit description is proved here, rather than imported as a proved statement from the source's remark. Its inputs are lying over for integral extensions, transitivity of primes in a finite Galois extension [S4, Proposition (9.1), printed p. 54, PDF p. 73], the fundamental identity (8.2), printed pp. 46–47 / PDF pp. 65–66, and the decomposition-group order and tower formulas in the proof of (9.3), printed pp. 55–56 / PDF pp. 74–75. The source states its double-coset bijection on printed p. 55 / PDF p. 74 and leaves its proof to the reader.
- **Related source exercise and boundary:** [[05 - Galois Theory/Exercises/Exercise Gal142 - Complete Splitting in a Galois Closure|Exercise I.8.4]] treats the general Dedekind-domain version. It remains a separate numbered exercise, and neither solution uses the other as an unproved step. Counting degree-one residue factors alone would not suffice without also controlling ramification; the orbit sizes include both $e$ and $f$. Galois Theory is primary.

