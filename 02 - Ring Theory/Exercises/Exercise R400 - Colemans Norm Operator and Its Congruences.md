---
title: 'Exercise R400: Colemans Norm Operator and Its Congruences'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §5, Exercise 3, printed p. 351, PDF p. 370
source_refs:
- S4/ch-V/sec-5/ex-3
created: '2026-10-23'
---

# Exercise R400: Colemans Norm Operator and Its Congruences

## Problem Statement

> [!question] Neukirch V.5.3
> Let $\mathcal N(h)\in S$ be the power series (uniquely determined by exercise 1 and exercise 2) such that
> $$
> \mathcal N(h)\circ[\pi]=\prod_{\lambda\in F(1)}h(X+_F\lambda).
> $$
> The mapping $\mathcal N:S\to S$ is called Coleman’s norm operator. Show:
>
> (i) $\mathcal N(h_1h_2)=\mathcal N(h_1)\mathcal N(h_2)$.
>
> (ii) $\mathcal N(h)\equiv h\pmod{\mathfrak p}$.
>
> (iii) $h\in X^iS^*$ for $i\ge0\Longrightarrow\mathcal N(h)\in X^iS^*$.
>
> (iv) $h\equiv1\pmod{\mathfrak p^i}$ for $i\ge1\Longrightarrow\mathcal N(h)\equiv1\pmod{\mathfrak p^{i+1}}$.
>
> (v) For $\mathcal N^0(h)=h$, $\mathcal N^n(h)=\mathcal N(\mathcal N^{n-1}(h))$, one has
> $$
> \mathcal N^n(h)\circ[\pi^n]=\prod_{\lambda\in F(n)}h(X+_F\lambda),\qquad n\ge0.
> $$
> (vi) If $h\in X^iS^*$, $i\ge0$, then $\mathcal N^{n+1}(h)/\mathcal N^n(h)\in S^*$ and
> $$
> \mathcal N^{n+1}(h)\equiv\mathcal N^n(h)\pmod{\mathfrak p^{n+1}},\qquad n\ge0.
> $$

## Hints

> [!hint]- Hint 1
> Use the injectivity of composition with $e=[\pi]$ to transfer identities from the defining products.

> [!hint]- Hint 2
> Reduce after adjoining $F(1)$: every division point reduces to zero, and $e(X)$ reduces to $X^q$. For the improving congruence, expand a product of $1+\pi^if$.

> [!hint]- Hint 3
> For (vi), first show $r=\mathcal N(h)/h\in1+\pi S$. Then apply (iv) repeatedly to $\mathcal N^n(r)$.

## Solution

> [!success]- Independent derivation
> Write $\mathfrak o=\mathfrak o_K$, $S=\mathfrak o[[X]]$, $e=[\pi]_F$, and $F(n)=\ker[\pi^n]_F$. Source Proposition (5.2) gives $\#F(n)=q^n$, and Theorem (5.4) gives the totally ramified Galois division fields and their scalar action. Evaluating a bounded integral series at division points of positive valuation is legitimate; coefficients after translating $X$ by such a point are convergent $p$-adic sums. The notation $X+_F\lambda$ means $F(X,\lambda)$, not ordinary addition.
>
> The preceding two exercises prove existence and uniqueness of $\mathcal N$. We will also use this consequence of $e\equiv X^q\pmod\pi$: composition by $e$ detects divisibility by every $\pi^r$. Indeed, if the least coefficient valuation of $A\in S$ is $m<r$, divide by $\pi^m$; its nonzero reduction $\bar A$ remains nonzero after substituting $X^q$. Hence $A(e)\notin\pi^rS$. This proves
> $$
> A(e)\in\pi^rS\quad\Longleftrightarrow\quad A\in\pi^rS.
> $$
>
> **(i)** Multiply the two finite products defining $\mathcal N(h_1)$ and $\mathcal N(h_2)$. The result is the defining product for $h_1h_2$. Injectivity of composition gives the asserted multiplicativity and, in particular, $\mathcal N(1)=1$.
>
> **(ii)** Reduce the product in the integer ring of $L_1$. All $\lambda\in F(1)$ reduce to zero, so its reduction is $\bar h(X)^q=\bar h(X^q)$ because the coefficients belong to $\mathbb F_q$. The other side reduces to $\overline{\mathcal N(h)}(X^q)$. Injectivity of substitution by $X^q$ gives $\overline{\mathcal N(h)}=\bar h$.
>
> **(iii)** For $v\in S^*$, each $v(\lambda)$ is a unit and $\mathcal N(v)(0)=\prod_\lambda v(\lambda)$ is a unit, so $\mathcal N(v)\in S^*$. For $h=X$, the product has a zero factor at $X=0$, so $\mathcal N(X)(0)=0$; by (ii), $\mathcal N(X)\equiv X\pmod\pi$, so its linear coefficient is a unit. Thus $\mathcal N(X)\in XS^*$. Multiplicativity proves the claim for $X^iv$.
>
> **(iv)** Write $h=1+\pi^if$, $i\ge1$. Its finite product expands as
> $$
> \prod_\lambda(1+\pi^if(X+_F\lambda))
> \equiv1+\pi^i T(f)\pmod{\pi^{2i}},
> \quad T(f)=\sum_\lambda f(X+_F\lambda).
> $$
> The same Galois argument as in Exercise 2 gives $T(f)\in S$. Reducing in the division field gives $\overline{T(f)}=q\bar f(X)=0$, so $T(f)\in\pi S$. The remaining symmetric coefficients are integral and Galois-invariant, so the displayed congruence holds in $S$ itself. Since $2i\ge i+1$, the product is $1$ modulo $\pi^{i+1}$. Divisibility detection for composition by $e$ now gives $\mathcal N(h)\equiv1\pmod{\pi^{i+1}}$.
>
> **(v)** The statement at $n=0$ is $h(X)=h(X+_F0)$. Suppose it holds for $n$. In the product defining $\mathcal N(\mathcal N^nh)$, substitute $[\pi^n](X)$. For each $\lambda\in F(1)$ choose $\mu_\lambda\in F(n+1)$ with $[\pi^n](\mu_\lambda)=\lambda$. Then
> $$
> F([\pi^n](X),\lambda)=[\pi^n](F(X,\mu_\lambda)).
> $$
> By the induction hypothesis the corresponding factor is $\prod_{\nu\in F(n)}h(X+_F\mu_\lambda+_F\nu)$. The cosets $\mu_\lambda+_FF(n)$ partition $F(n+1)$, proving the level-$n+1$ formula.
>
> **(vi)** By (iii), $\mathcal N(h)$ and $h$ have the same $X$-order $i$, and their quotient $r$ belongs to $S^*$. Part (ii), after cancelling $X^i$ and dividing by a unit, gives $r\equiv1\pmod\pi$. From $\mathcal N(h)=hr$ and (i),
> $$
> \frac{\mathcal N^{n+1}(h)}{\mathcal N^n(h)}=\mathcal N^n(r)\in1+\pi^{n+1}S
> $$
> by $n$ successive applications of (iv). This proves the quotient statement and, on multiplication by the integral series $\mathcal N^n(h)$, the final congruence.
>
> The stronger ratio congruence proved in (vi) is useful for norm-compatible interpolation; it also handles the allowed zero of order $i$ without illegally treating $h$ itself as a unit.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Groups and Lubin Tate Modules|Formal Groups and Lubin Tate Modules]]

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Notes

- **Source status:** The exercise and all printed subparts were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §5, printed pp. 351–352, PDF pp. 370–371]. The division-point modules and their field/Galois description were checked at [Proposition (5.2), Theorem (5.4), printed pp. 347–349, PDF pp. 366–368]. No source figure is needed.
- **Proof scope:** All six claims are independently derived from the preceding two exercises, the finite division-point module and its Galois action. The composition/divisibility lemma and the trace argument needed for the extra power of $\pi$ are included; no property of Coleman’s operator is imported as an unproved conclusion.
