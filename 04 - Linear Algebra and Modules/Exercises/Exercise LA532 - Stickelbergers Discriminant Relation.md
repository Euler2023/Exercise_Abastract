---
title: "Exercise LA532: Stickelberger's Discriminant Relation"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §2, Exercise 7, printed p. 15, PDF p. 34"
created: 2026-10-11
---

# Exercise LA532: Stickelberger's Discriminant Relation

## Problem Statement

> [!question] Neukirch I.2.7
> The discriminant $d_K$ of an algebraic number field $K$ is always $\equiv0\pmod4$ or $\equiv1\pmod4$ (*Stickelberger's discriminant relation*).
>
> **Original hint:** The determinant $\det(\sigma_i\omega_j)$ of an integral basis $\omega_j$ is a sum of terms, each prefixed by a positive or a negative sign. Writing $P$, resp. $N$, for the sum of the positive, resp. negative terms, one finds
> $$
> d_K=(P-N)^2=(P+N)^2-4PN.
> $$

## Hints

> [!hint]- Hint 1
> Use the Leibniz expansion of the embedding matrix $(\sigma_i(\omega_j))$. Put the monomials indexed by even permutations into $P$, and those indexed by odd permutations into $N$, without including the determinant's minus signs in $N$.

> [!hint]- Hint 2
> Work in a finite normal closure of $K/\mathbb Q$. Every automorphism permutes the embeddings, hence the rows of the matrix. An even row permutation preserves $P$ and $N$, whereas an odd row permutation interchanges them.

> [!hint]- Hint 3
> Show that $P+N$ and $PN$ are fixed by the Galois group and are algebraic integers. A rational algebraic integer is an integer; now use the identity in the original hint and the possible squares modulo $4$.

## Solution

> [!success]- Independent derivation
> Let $n=[K:\mathbb Q]\ge1$, and choose an integral basis $\omega_1,\ldots,\omega_n$ of $\mathcal O_K$. Let $E/\mathbb Q$ be a finite normal closure of $K/\mathbb Q$, and list the $n$ distinct embeddings into $E$ as $\sigma_1,\ldots,\sigma_n$. Characteristic zero makes these extensions separable, so $E/\mathbb Q$ is Galois. Write
> $$
> A=(a_{ij})_{1\le i,j\le n},\qquad a_{ij}=\sigma_i(\omega_j).
> $$
> By the discriminant definition for an integral basis,
> $$
> d_K=(\det A)^2.
> $$
> Each $a_{ij}$ is an algebraic integer: applying $\sigma_i$ to a monic integer equation for $\omega_j$ gives a monic integer equation for $a_{ij}$.
>
> **1. Separate the two permutation parities.** For $\pi\in S_n$, define
> $$
> m_\pi=\prod_{i=1}^n a_{i,\pi(i)},\qquad
> P=\sum_{\substack{\pi\in S_n\\\operatorname{sgn}(\pi)=1}}m_\pi,
> \qquad
> N=\sum_{\substack{\pi\in S_n\\\operatorname{sgn}(\pi)=-1}}m_\pi.
> $$
> These are unsigned sums: “positive” and “negative” refer only to the coefficients in the determinant expansion, not to the numerical signs of the terms. The Leibniz formula gives
> $$
> \det A=P-N,
> \qquad d_K=(P-N)^2=(P+N)^2-4PN.
> $$
> Since algebraic integers form a ring, every $m_\pi$, and hence $P$, $N$, $P+N$, and $PN$, is an algebraic integer in $E$.
>
> **2. Descend the symmetric combinations to $\mathbb Q$.** Take $g\in\operatorname{Gal}(E/\mathbb Q)$. Composition by $g$ permutes the embeddings, so there is $\tau\in S_n$ with
> $$
> g\circ\sigma_i=\sigma_{\tau(i)}.
> $$
> Consequently
> $$
> g(m_\pi)=\prod_{i=1}^n a_{\tau(i),\pi(i)}
> =\prod_{k=1}^n a_{k,\pi(\tau^{-1}(k))}
> =m_{\pi\circ\tau^{-1}}.
> $$
> The permutation $\pi\circ\tau^{-1}$ has sign $\operatorname{sgn}(\pi)\operatorname{sgn}(\tau)$. If $\tau$ is even, $g(P)=P$ and $g(N)=N$; if $\tau$ is odd, $g(P)=N$ and $g(N)=P$. In either case,
> $$
> g(P+N)=P+N,\qquad g(PN)=PN.
> $$
> The fixed field of $\operatorname{Gal}(E/\mathbb Q)$ is $\mathbb Q$. Thus $P+N,PN\in\mathbb Q$.
>
> **3. Use rational integrality and reduce modulo $4$.** A rational algebraic integer is an integer: if $r=a/b$ in lowest terms with $b>0$ satisfies a monic integer equation of degree $s$, multiplying by $b^s$ shows that $b\mid a^s$. Coprimality forces $b=1$. Applying this to the combinations above gives
> $$
> u:=P+N\in\mathbb Z,\qquad v:=PN\in\mathbb Z.
> $$
> Therefore
> $$
> d_K=u^2-4v\equiv u^2\pmod4.
> $$
> An even integer has square $0$ modulo $4$, and an odd integer has square $1$ modulo $4$. Hence
> $$
> d_K\equiv0\ \text{or}\ 1\pmod4.
> $$
> For $n=1$, the odd-permutation sum is empty and equals $0$, so $N=0$; all the identities and the conclusion remain valid.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[02 - Ring Theory/Concepts/Orders and Conductors|Orders and Conductors]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** The problem and its printed hint were visually checked against [S4, Ch. I, §2, Exercise 7, printed p. 15, PDF p. 34]. The source supplies the determinant identity as a hint, not a complete proof of the exercise. The proof above is an independent derivation. No source figure is needed.
- **Inputs and proof scope:** The embedding-matrix discriminant definition was visually checked at [S4, Ch. I, §2, printed p. 11, PDF p. 30]; the integral-basis definition and Proposition (2.10), which ensures existence over $\mathbb Z$, at [printed p. 12, PDF p. 31]; and $d_K=d(\mathcal O_K)$ at [printed p. 15, PDF p. 34]. The proof also imports existence of a finite normal closure in characteristic zero, the Galois fixed-field theorem, and closure of algebraic integers under sums and products. It explicitly proves the action on the two permutation sums and the rational-integrality step. An integral basis is a $\mathbb Z$-basis of $\mathcal O_K$, not an arbitrary $\mathbb Q$-basis of $K$.
- **Routing:** The primary calculation splits a determinant by permutation parity and recombines its square. It therefore belongs in Linear Algebra and Modules; Galois theory and ring integrality provide the cross-topic descent inputs.
- **Terminology:** The unsigned sums $P$ and $N$ do not require an ordering on $K$ or $E$. The conclusion concerns the signed integer discriminant, so it also applies when $d_K<0$.
