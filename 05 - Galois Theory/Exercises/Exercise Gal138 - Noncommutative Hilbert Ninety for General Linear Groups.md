---
title: "Exercise Gal138: Noncommutative Hilbert Ninety for General Linear Groups"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - galois-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercises, Exercise 31, printed pp. 549-550, PDF pp. 564-565"
created: 2026-09-26
---

# Exercise Gal138: Noncommutative Hilbert Ninety for General Linear Groups

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 31
> Let $K/k$ be a finite Galois extension, $G=\operatorname{Gal}(K/k)$, and $\Gamma=GL_n(K)$, with $G$ acting entrywise on $\Gamma$. A cocycle is a family $A(\sigma)\in\Gamma$ satisfying
>
> $$
> A(\sigma)\,\sigma(A(\tau))=A(\sigma\tau).
> $$
>
> It *splits* when $A(\sigma)=B^{-1}\sigma(B)$ for some $B\in\Gamma$. Prove that $H^1(G,GL_n(K))=1$, meaning every such cocycle splits. *Hint (source):* Consider the determinant polynomial of $\sum_{\gamma\in G}t_\gamma A(\gamma)$, then seek $y\in K$ for which $B=\sum_\gamma\gamma(y)A(\gamma)$ is invertible. The source notes that the polynomial-choice step needs separate treatment when $k$ is finite.

> [!warning] Source convention in the final hint
> The definition before Exercise 31 uses $A(\sigma)=B^{-1}\sigma(B)$, while the last line of the printed hint writes $A(\sigma)=B\,\sigma(B)^{-1}$. Both are split forms after replacing the witness matrix by its inverse, but the two printed $B$'s cannot be regarded as the same chosen matrix. The proof below keeps the first convention.

## Hints

> [!hint]- Hint 1: Turn the cocycle into an action
> Define $T_\sigma(v)=A(\sigma)\sigma(v)$ on $K^n$. The cocycle identity says $T_\sigma T_\tau=T_{\sigma\tau}$.

> [!hint]- Hint 2: Average a vector without dividing by $|G|$
> For $v\in K^n$, the sum $\sum_{\sigma\in G}T_\sigma(v)$ is fixed. Vary $v$ and prove fixed vectors span $K^n$ over $K$.

> [!hint]- Hint 3: Use independence of distinct automorphisms
> If a nonzero $K$-linear functional annihilated every fixed vector, apply it to $\sum_\sigma T_\sigma(av)$ for all $a\in K$.

## Solution

> [!success]- Solution valid for finite and infinite $k$
> Define the semilinear action $T_\sigma(v)=A(\sigma)\sigma(v)$ on $V=K^n$. The cocycle identity gives $T_\sigma T_\tau=T_{\sigma\tau}$ and $T_1=I$. Let $W=V^G$ be its $k$-space of fixed vectors. For every $v\in V$, the unnormalized sum $w(v)=\sum_{\sigma\in G}T_\sigma(v)$ belongs to $W$, since the group permutes its summands.
>
> We claim that $KW=V$. If not, choose a nonzero $K$-linear functional $\ell:V\to K$ vanishing on $KW$. For arbitrary $v\in V$ and $a\in K$,
>
> $$
> 0=\ell(w(av))
> =\sum_{\sigma\in G}\sigma(a)\,\ell(T_\sigma(v)).
> $$
>
> Artin's linear-independence theorem for distinct field automorphisms says that the maps $\sigma:K\to K$ are linearly independent over $K$. Therefore every coefficient $\ell(T_\sigma(v))$ is zero. Taking $\sigma=1$ gives $\ell(v)=0$ for all $v$, contradiction. Thus $KW=V$.
>
> Choose $n$ members $w_1,\ldots,w_n\in W$ that form a $K$-basis of $V$, and let $C\in GL_n(K)$ have these vectors as columns. The fixed-vector equations read
>
> $$
> A(\sigma)\sigma(C)=C,
> \qquad
> A(\sigma)=C\,\sigma(C)^{-1}.
> $$
>
> Set $B=C^{-1}$. Then $\sigma(B)=\sigma(C)^{-1}$ and
>
> $$
> A(\sigma)=B^{-1}\sigma(B),
> $$
>
> precisely the splitting convention in the problem. The argument never uses infinitude of $k$ and therefore includes finite base fields.

## Related Concepts

- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert's Theorem 90]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Normal Basis Theorem|Normal Basis Theorem]]

## Notes

- **Source and proof status:** [S2, Ch. XIII, Ex. 31, printed pp. 549–550, PDF pp. 564–565]. Both source pages and the two opposite witness conventions were checked against rendered images. The descent proof is independent. Its named input is Artin's independence theorem for distinct field automorphisms, which holds without an infinite-base-field assumption.
- **Method boundary:** A nonzero polynomial on $k^m$ need not have a nonzero value at a $k$-point when $k$ is finite. This is the gap the printed hint itself flags; the invariant-vector argument resolves it.

