---
title: "Exercise G332: Schmidt's Splitting Theorem in Solvable Prime Degree"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §9, Exercise 3, printed p. 58, PDF p. 77"
created: 2026-10-20
---

# Exercise G332: Schmidt's Splitting Theorem in Solvable Prime Degree

## Problem Statement

> [!question] Neukirch I.9.3
> Let $L/K$ be a solvable extension of prime degree $p$ (not necessarily Galois). If the unramified prime ideal $\mathfrak p$ in $L$ has two prime factors $\mathfrak P$ and $\mathfrak P'$ of degree $1$, then it is already totally split (theorem of F. K. Schmidt).
>
> **Printed hint:** Use the following result of Galois (see [75], chap. II, §3): if $G$ is a transitive solvable permutation group of prime degree $p$, then there is no nontrivial permutation $\sigma\in G$ which fixes two distinct letters.

The two prime factors are distinct. A solvable extension is understood in the Galois-theoretic sense: its finite separable normal closure has solvable Galois group. The ideal $\mathfrak p$ is a base-field prime unramified in $L$; “degree $1$” means residue degree $1$.

## Hints

> [!hint]- Hint 1
> Let $G$ act faithfully on the $p$ embeddings of $L$ into its normal closure. A minimal nontrivial normal subgroup of a finite solvable group is elementary abelian.

> [!hint]- Hint 2
> Its orbits are blocks of equal size dividing $p$, so it is transitive. As a $p$-subgroup of $S_p$ it must have order $p$. Identify its regular action with translations of $\mathbb F_p$.

> [!hint]- Hint 3
> The whole group normalizes these translations and acts by affine maps $x\mapsto ax+b$. A decomposition group fixes two letters because the corresponding orbit sizes are $ef=1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **1. Prove the group-theoretic assertion in the printed hint.** Let $G\le S_p$ be faithful, solvable, and transitive. Choose a minimal nontrivial normal subgroup $V$ of $G$. Its commutator subgroup is characteristic in $V$, hence normal in $G$. Solvability implies that this commutator subgroup is proper; minimality forces it to be trivial. Thus $V$ is abelian. If $\ell$ divides $|V|$, its subgroup of elements killed by $\ell$ is nontrivial and characteristic, so equals $V$. Consequently $V$ is an elementary abelian $\ell$-group.
>
> Normality of $V$ makes $G$ permute its orbits, and transitivity of $G$ makes them all have equal size. This size divides $p$. If it were $1$, every element of $V$ would fix every letter, contradicting faithfulness. Thus $V$ is transitive on the $p$ letters, and $p$ divides $|V|$. Hence $\ell=p$. Since $V\le S_p$ and $p!$ has only one factor $p$, Lagrange's theorem gives $|V|=p$. Its transitive action is regular.
>
> Identify the letters with $\mathbb F_p$ so that a generator of $V$ is $x\mapsto x+1$. For $g\in G$, normality gives
> $$
> g(x+1)=g(x)+a
> $$
> for a nonzero $a\in\mathbb F_p$, and induction yields $g(x)=ax+b$. If this affine map fixes distinct $x,y$, then $(a-1)(x-y)=0$, so $a=1$, and either fixed point then gives $b=0$. It is the identity. This proves the hinted assertion without appealing to the unread reference [75].
>
> **2. Translate prime factors into permutation orbits.** Let $N/K$ be the normal closure, $G=\operatorname{Gal}(N/K)$, and $H=\operatorname{Gal}(N/L)$. The action on $G/H$ is transitive of degree $p$ and faithful: an element of its kernel fixes every conjugate of $L$, hence their generated field $N$. Its group is solvable by hypothesis.
>
> Choose a prime $\mathfrak Q$ of $N$ above $\mathfrak p$ and let $D$ be its decomposition group. The $D$-orbits on $G/H$ correspond to primes of $L$ via $gH\mapsto g^{-1}\mathfrak Q\cap L$. This is a bijection on orbits: lying over gives representatives; two representatives contract to the same prime precisely when their primes of $N$ are conjugate under $H$. The stabilizer of $gH$ is $D\cap gHg^{-1}$. Using decomposition-group orders $ef$ and multiplication of $e,f$ in towers gives
> $$
> |D\cdot gH|
> =\frac{|D|}{|D\cap gHg^{-1}|}
> =e(\mathfrak P_g/\mathfrak p)f(\mathfrak P_g/\mathfrak p),
> \qquad \mathfrak P_g=g^{-1}\mathfrak Q\cap L.
> $$
> The two primes in the hypothesis have $e=1$ by unramifiedness and $f=1$ by degree. Their distinct corresponding orbits are therefore two singleton orbits. Every element of $D$ fixes these two letters. Step 1 forces every such element to be the identity, so $D=1$.
>
> All $D$-orbits are now singletons. There are $[L:K]=p$ of them and all associated $ef$ equal $1$. Thus every prime above $\mathfrak p$ has $e=f=1$, proving total splitting in $L$.

## Related Concepts

- [[01 - Group Theory/Concepts/Solvable Groups]]
- [[01 - Group Theory/Concepts/Group Actions]]
- [[01 - Group Theory/Concepts/Symmetric Groups]]
- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups]]

## Notes

- **Source verification:** The complete problem and printed hint was visually checked in [S4, Ch. I, §9, Exercise 3, printed p. 58, PDF p. 77]. No source figure is required.
- **Proof status and inputs:** Both the hinted affine-group lemma and its application are independent derivations. The proof uses Cauchy's and Lagrange's finite-group theorems, normal-subgroup orbit partitions, and the Galois correspondence. The arithmetic inputs are transitivity of primes (9.1), printed p. 54 / PDF p. 73, the fundamental identity (8.2), printed pp. 46–47 / PDF pp. 65–66, and the decomposition-group order and tower calculation in (9.3), printed pp. 55–56 / PDF pp. 74–75. The double-coset remark on printed p. 55 / PDF p. 74 is stated with its proof left to the reader; the needed argument is supplied here.
- **Boundary and routing:** No Frobenius exponent, density theorem, or unverified claim from [75] is imported. The normal closure is used only to obtain a faithful permutation action; $L/K$ itself need not be Galois. Group Theory is primary because the decisive step is the structure of a solvable group acting on a prime number of letters.

