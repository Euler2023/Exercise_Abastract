---
title: "Exercise Gal141: Complete Splitting in a Compositum"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §8, Exercise 3, printed p. 52, PDF p. 71"
created: 2026-10-20
---

# Exercise Gal141: Complete Splitting in a Compositum

## Problem Statement

> [!question] Neukirch I.8.3
> If a prime ideal $\mathfrak p$ of $K$ is totally split in two separable extensions $L/K$ and $L'/K$, then it is also totally split in the composite extension.

Use the section's general setting: $\mathfrak o$ is an arbitrary Dedekind domain with fraction field $K$, all extensions are finite inside a fixed algebraic closure, and primes of a field mean nonzero prime ideals of the corresponding integral closure. No number-field restriction is imposed.

## Hints

> [!hint]- Hint 1
> Choose a finite Galois extension $N/K$ containing $LL'$. Consider its decomposition group $D$ at a prime above $\mathfrak p$.

> [!hint]- Hint 2
> For an intermediate field $F$, primes correspond to $D$-orbits on $G/\operatorname{Gal}(N/F)$, and the orbit sizes are the products $ef$. Complete splitting means that $D$ acts trivially.

> [!hint]- Hint 3
> Put $H=\operatorname{Gal}(N/L)$ and $H'=\operatorname{Gal}(N/L')$. The subgroup fixing $LL'$ is $H\cap H'$, and taking cores commutes with intersection.

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
> Now take a finite Galois $N/K$ containing $M=LL'$, which exists since both extensions are finite separable. Put
> $$
> H=\operatorname{Gal}(N/L),\qquad
> H'=\operatorname{Gal}(N/L'),\qquad
> J=\operatorname{Gal}(N/M)=H\cap H'.
> $$
> By the hypothesis and the orbit criterion,
> $$
> D\subseteq\operatorname{core}_G(H)\cap\operatorname{core}_G(H')
> =\bigcap_{g\in G}g(H\cap H')g^{-1}
> =\operatorname{core}_G(J).
> $$
> Apply the same criterion with $F=M$. It says that every prime above $\mathfrak p$ in $M$ has $e=f=1$ and that their number is $[M:K]$. Hence $\mathfrak p$ is totally split in $LL'$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups]]
- [[05 - Galois Theory/Concepts/Composita and Restriction Maps]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem]]
- [[01 - Group Theory/Concepts/Group Actions]]

## Notes

- **Source verification:** The complete problem was visually checked in [S4, Ch. I, §8, Exercise 3, printed p. 52, PDF p. 71]. No source figure is required.
- **Proof status and inputs:** This is an independent derivation. The orbit description is proved here, rather than imported as a proved statement from the source's remark. Its inputs are lying over for integral extensions, transitivity of primes in a finite Galois extension [S4, Proposition (9.1), printed p. 54, PDF p. 73], the fundamental identity (8.2), printed pp. 46–47 / PDF pp. 65–66, and the decomposition-group order and tower formulas in the proof of (9.3), printed pp. 55–56 / PDF pp. 74–75. The source states its double-coset bijection on printed p. 55 / PDF p. 74 and leaves its proof to the reader.
- **Boundary and routing:** The proof keeps the arbitrary Dedekind-domain setting and uses neither finite-field Frobenius nor a number-field completion theorem. It does not assume the Galois-closure exercise to prove the compositum assertion. Galois Theory is primary because subgroup kernels and the fixed field of an intersection govern the construction.

