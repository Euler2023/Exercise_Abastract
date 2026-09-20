---
title: "Exercise F88: Relative Algebraic Closure in Free and Separable Extensions"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - field-extensions
  - transcendence-degree
  - separable-extensions
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VIII, printed p. 374, PDF p. 389, Exercise 2"
created: 2026-09-15
---

# Exercise F88: Relative Algebraic Closure in Free and Separable Extensions

## Problem Statement

> [!question]
> A subfield $k$ of a field $K$ is said to be algebraically closed in $K$ if every element of $K$ which is algebraic over $k$ is contained in $k$. Prove: If $k$ is algebraically closed in $K$, and $K, L$ are free over $k$, and $L$ is separable over $k$ or $K$ is separable over $k$, then $L$ is algebraically closed in $KL$.

## Hints

> [!hint]- Hint 1: Freeness
> Freeness means that finite subsets of $K$ algebraically independent over $k$ remain algebraically independent over $L$. Equivalently, transcendence bases of the two extensions have disjoint, algebraically independent union. For infinite transcendence degree, equality of cardinal sums alone does not characterize this condition.

> [!hint]- Hint 2: The regular case
> If $K/k$ is separable and $k$ is relatively algebraically closed in $K$, then $K/k$ is regular. Apply Lang VIII, Theorem 4.13, with the given freeness hypothesis.

> [!hint]- Hint 3: The other separable factor
> Reduce to a finitely generated separable subextension of $L/k$, choose a separating transcendence basis, and handle pure transcendental base change followed by finite separable base change. Rational interpolation proves the first preservation statement; a finite Galois closure and trace coordinates prove the second.

## Solution

> [!success]-
> We say that $k$ is **relatively algebraically closed** in $K$ when every element of $K$ algebraic over $k$ lies in $k$. Freeness ensures that a transcendence basis of either factor remains algebraically independent over the other. We do not replace freeness by a cardinal equality when transcendence degrees are infinite.
>
> ### 1. When $K/k$ is separable
>
> The two assumptions on $K/k$ say that it is regular. Lang VIII, Theorem 4.13 states that if $K/k$ is regular and $K,L$ are free over $k$, then $KL/L$ is regular [printed p. 367, PDF p. 382]. In particular, $L$ is relatively algebraically closed in $KL$. All hypotheses of that theorem are present here.
>
> For the remaining case assume $L/k$ is separable. If $k$ is finite, it is perfect, so every extension of $k$ is separable and the preceding case applies. We may therefore suppose that $k$ is infinite. We prove the two preservation statements needed below.
>
> ### 2. Pure transcendental base change
>
> Let $E$ be an infinite field relatively algebraically closed in a field $M$, and let $T$ be transcendental over $M$. We prove that $E(T)$ is relatively algebraically closed in $M(T)$.
>
> Take $a(T)=P(T)/Q(T)\in M(T)$ algebraic over $E(T)$, with $Q\ne0$, and choose $d$ with $\deg P,\deg Q\le d$. After clearing denominators in an algebraic equation, write
> $$
> \sum_{j=0}^m A_j(T)a(T)^j=0,
> \qquad A_j\in E[T],\quad A_m\ne0.
> $$
> For all but finitely many $c\in E$, both $Q(c)$ and $A_m(c)$ are nonzero. Then $a(c)\in M$ is algebraic over $E$, hence belongs to $E$. Choose $2d+1$ distinct such values $c_1,\ldots,c_{2d+1}$, and put $v_i=a(c_i)\in E$.
>
> The homogeneous equations
> $$
> P_0(c_i)-v_iQ_0(c_i)=0
> \quad (1\le i\le2d+1)
> $$
> in the $2d+2$ coefficients of polynomials $P_0,Q_0$ of degree at most $d$ have coefficients in $E$ and a nonzero solution $(P,Q)$ over $M$. Row reduction over $E$ therefore gives a nonzero solution over $E$. In such a solution $Q_0\ne0$: otherwise $P_0$ would have more roots than its degree. The polynomial $PQ_0-P_0Q$ has degree at most $2d$ and vanishes at all the $c_i$, so it is zero. Thus $a=P_0/Q_0\in E(T)$.
>
> Iterating this argument proves that $k(T_1,\ldots,T_s)$ is relatively algebraically closed in $K(T_1,\ldots,T_s)$ whenever the $T_i$ are algebraically independent over $K$.
>
> ### 3. Finite separable base change
>
> Let $E$ be relatively algebraically closed in $M$, and let $N/E$ be finite separable in a common algebraically closed overfield. Let $G/E$ be a finite Galois closure of $N/E$.
>
> First, $M$ and $G$ are linearly disjoint over $E$. Indeed, write $G=E(\theta)$ by the primitive element theorem. If the minimal polynomial of $\theta$ over $E$ factored over $M$, a monic factor would have coefficients both in $M$ and algebraic over $E$ (they are symmetric expressions in roots algebraic over $E$). These coefficients would lie in $E$, contradicting irreducibility. Thus the degree is preserved, proving linear disjointness. Consequently $MG/M$ is Galois, with automorphisms obtained by extending those of $G/E$ and fixing $M$.
>
> Choose an $E$-basis $g_1,\ldots,g_d$ of $G$ and its trace-dual basis $g_1^*,\ldots,g_d^*$. The trace pairing is nondegenerate because the extension is separable: in the power basis of a primitive element its Gram matrix is $V^tV$, where $V$ is the Vandermonde matrix of the distinct conjugates, and $\det(V)^2\ne0$.
>
> If $\beta\in MG$ is algebraic over $G$, express $\beta=\sum_i b_i g_i$, $b_i\in M$. Trace compatibility under the linearly disjoint base change gives
> $$
> b_i=\operatorname{Tr}_{MG/M}(\beta g_i^*)
> =\sum_{\sigma\in\operatorname{Gal}(G/E)}\sigma(\beta g_i^*).
> $$
> Since $\beta$ is algebraic over $G$, it is algebraic over $E$. Each summand is algebraic over $E$, so $b_i$ is algebraic over $E$. But $b_i\in M$, and therefore $b_i\in E$. Hence $\beta\in G$: the field $G$ is relatively algebraically closed in $MG$.
>
> Now let $\beta\in MN$ be algebraic over $N$. It is algebraic over $G$, so $\beta\in G$ by the preceding paragraph. Every automorphism of $G/N$ extends to $MG$ fixing $M$ and fixes $MN$ pointwise. Thus $\beta\in G^{\operatorname{Gal}(G/N)}=N$. This proves that $N$ is relatively algebraically closed in $MN$.
>
> ### 4. Apply the two lemmas when $L/k$ is separable
>
> Let $\alpha\in KL$ be algebraic over $L$. A rational expression for $\alpha$ uses finitely many elements of $K$ and $L$, and one algebraic equation for $\alpha$ uses finitely many further coefficients in $L$. Choose a finitely generated intermediate field $L_0/k$ containing all these elements of $L$. Then
> $$
> \alpha\in KL_0,\qquad \alpha\text{ is algebraic over }L_0.
> $$
> Separability of $L/k$ implies that $L_0/k$ has a finite separating transcendence basis $T$. Thus $L_0/k(T)$ is finite separable. By freeness, $T$ is algebraically independent over $K$.
>
> Step 2 shows that $k(T)$ is relatively algebraically closed in $K(T)$. Apply Step 3 with
> $$
> E=k(T),\qquad M=K(T),\qquad N=L_0.
> $$
> It follows that $L_0$ is relatively algebraically closed in $K(T)L_0=KL_0$. Hence $\alpha\in L_0\subseteq L$, as required.

## Related Concepts

- [[03 - Field Theory/Concepts/Transcendence Bases and Transcendence Degree|Transcendence Bases and Transcendence Degree]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]

## Notes

- **Source**: [S2, Ch. VIII, Exercise 2, printed p. 374, PDF p. 389]. The two-case solution and the interpolation and finite-separable-base-change arguments are independently derived here.
- **Source theorem used**: Lang VIII, Theorem 4.13, printed p. 367, PDF p. 382, proves regularity after a free base change. The preceding Theorem 4.12 proves linear disjointness; it is not the relative-algebraic-closure statement.
- **Separability convention**: For general extensions we use Lang's convention: every finitely generated intermediate extension has a separating transcendence basis. The finite-separable argument also uses the primitive element theorem and the finite Galois correspondence.
- **Infinite transcendence degree**: The equality $\operatorname{tr.deg}(KL/k)=\operatorname{tr.deg}(K/k)+\operatorname{tr.deg}(L/k)$ alone need not imply freeness: take $K=L=k(t_1,t_2,\ldots)$, for which both sides are $\aleph_0$.
