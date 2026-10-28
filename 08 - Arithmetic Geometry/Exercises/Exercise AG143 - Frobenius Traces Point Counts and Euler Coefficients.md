---
title: "Exercise AG143: Frobenius Traces Point Counts and Euler Coefficients"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.4, Exercise 9.4.2, printed pp. 393–394, PDF pp. 405–406"
source_refs:
  - "S7/ch-9/sec-4/ex-2"
created: 2026-10-28
---

# Exercise AG143: Frobenius Traces Point Counts and Euler Coefficients

## Problem Statement

> [!question] Original Exercise 9.4.2
> Recall $t_{p^e}(E)=p^e+1-|\widetilde E(\mathbb F_{p^e})|$ for $e\ge1$ and $t_1(E)=2$, so $t_p(E)=a_p(E)$. Section 8.3 gives $t_{p^e}(E)=\sigma_{p^e,*}+\sigma_{p^e}^{*}$ and states
> $$
> t_{p^e}(E)=t_p(E)t_{p^{e-1}}(E)-1_E(p)p\,t_{p^{e-2}}(E)\quad(e\ge2),
> $$
> where $1_E$ is the trivial character modulo the conductor $N$.
>
> (a) Extend the end of the proof of Theorem 9.4.1 to show $\operatorname{tr}(\operatorname{Frob}_p^e)=t_{p^e}(E)$ for $p\nmid\ell N$, including $e=0$. For its eigenvalues $\lambda_1,\lambda_2$, prove
> $$
> \lambda_1^e+\lambda_2^e=(\lambda_1+\lambda_2)(\lambda_1^{e-1}+\lambda_2^{e-1})-\lambda_1\lambda_2(\lambda_1^{e-2}+\lambda_2^{e-2}),
> $$
> and use determinant $p$ and trace $t_p(E)$ to prove the recurrence; vary $\ell$ to obtain it for $p\nmid N$.
>
> (b) For $p\mid N$, use $\widetilde E:(y-m_1x)(y-m_2x)=x^3$, with $m_1+m_2,m_1m_2\in\mathbb F_p$. Show
> $$
> t\longmapsto((t-m_1)(t-m_2),\ t(t-m_1)(t-m_2))
> $$
> defines a map $\mathbb P^1(\mathbb F_q)\to\widetilde E(\mathbb F_q)$. Using $(x,y)\mapsto y/x$ off $(0,0)$, show it is injective except for possibly hitting $(0,0)$ twice when the distinct $m_i$ lie in $\mathbb F_q$, and surjective except for possibly missing $(0,0)$ when the $m_i$ do not lie there; it is bijective when $m_1=m_2\in\mathbb F_q$. Deduce $t_{p^e}=1$ for split multiplicative reduction and $t_{p^e}=(-1)^e$ for nonsplit multiplicative reduction, and check the recurrence. In the additive case show the repeated root $m$ lies in $\mathbb F_p$, treating $p=2$ separately, deduce $t_{p^e}=0$, and check the recurrence.
>
> (c) For $p\nmid N$, show
> $$
> (1-a_p(E)x+px^2)^{-1}=(1-\lambda_1x)^{-1}(1-\lambda_2x)^{-1}
> =\sum_{e\ge0}\left(\sum_{c+d=e}\lambda_1^c\lambda_2^d\right)x^e.
> $$
> Explain why the normalized point counts are $t_{p^e}=\lambda_1^e+\lambda_2^e$, whereas the prime-power Dirichlet coefficients are $a_{p^e}(E)=\sum_{c+d=e}\lambda_1^c\lambda_2^d$.

## Hints

> [!hint]- Hint 1
> The Frobenius/dual-Frobenius identity works over every finite extension of the residue field.

> [!hint]- Hint 2
> The normalization parameter $t=y/x$ has two preimages over a split node, none over a nonsplit node, and one over a cusp.

> [!hint]- Hint 3
> The coefficients of an inverse Euler polynomial are complete homogeneous symmetric sums, rather than power sums.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** Write $A=\rho_{E,\ell}(\operatorname{Frob}_p)$ at a good prime $p\ne\ell$. The Section 8.3 endomorphism identity for the $p^e$-power Frobenius, transported to prime-to-$p$ torsion by the reduction isomorphism, gives $A^e+p^eA^{-e}=t_{p^e}(E)I$. The two eigenvalues of $A$ have product $p$, so the two eigenvalues of the left side are both $\lambda_1^e+\lambda_2^e$. Thus $t_{p^e}=\lambda_1^e+\lambda_2^e=\operatorname{tr}(A^e)$; this also holds for $e=0$, since both sides are two. Expanding the product in the displayed identity cancels its two mixed terms and proves it even for repeated eigenvalues. Substituting $\lambda_1+\lambda_2=t_p$ and $\lambda_1\lambda_2=p$ gives the recurrence. For each fixed good $p$, choose any $\ell\ne p$; hence there is no remaining exclusion.
>
> **(b).** Put $Q(t)=(t-m_1)(t-m_2)$. Substitution of $x=Q(t),y=tQ(t)$ proves the curve equation. The homogeneous parametrization, for $[T:S]\in\mathbb P^1$, is
> $$
> [T:S]\longmapsto[S(T-m_1S)(T-m_2S):T(T-m_1S)(T-m_2S):S^3].
> $$
> At infinity this is $[0:1:0]$. Although the factors are written over a splitting field, their product has coefficients in $\mathbb F_p$, so the map is defined over $\mathbb F_p$. Every affine point with $x\ne0$ has the unique inverse $t=y/x$, and every point with $x=0$ is $(0,0)$. Its preimages are the roots $m_i$.
>
> If the node splits over $\mathbb F_q$, two parameters map to the one singular point, so the number of points is $q$ and $q+1-|\widetilde E(\mathbb F_q)|=1$. If it does not split, neither parameter is rational, and the singular point is an additional point beyond the $q+1$ parameters; the count is $q+2$ and the trace is $-1$. A nonsplit quadratic over $\mathbb F_p$ splits over $\mathbb F_{p^e}$ exactly when $e$ is even. These facts give $1$ in the split case and $(-1)^e$ in the nonsplit case. Since $1_E(p)=0$ and $t_p=\pm1$, the recurrence is $t_{p^e}=t_p t_{p^{e-1}}$ and is satisfied, also at $e=2$.
>
> For a repeated root, if $p\ne2$ then $m=(m_1+m_2)/2\in\mathbb F_p$. If $p=2$, the product $m^2\in\mathbb F_p$ and the squaring map on the finite field is bijective, so again $m\in\mathbb F_p$. Exactly one parameter maps to the singularity, so the parametrization bijects and the count is $q+1$. All traces with $e\ge1$ are zero; the recurrence at $e=2$ and thereafter has both right-hand terms zero.
>
> **(c).** In the formal power-series ring, multiply the geometric series $\sum_{c\ge0}\lambda_1^cx^c$ and $\sum_{d\ge0}\lambda_2^dx^d$. Their coefficient at $x^e$ is the asserted sum. This is the coefficient of the local Euler factor after setting $x=p^{-s}$, hence the Dirichlet coefficient. It agrees with the power sum only at $e=1$ in general: at $e=2$, $a_{p^2}=\lambda_1^2+p+\lambda_2^2=t_{p^2}+p$. This concrete difference prevents conflating point counts with Dirichlet coefficients.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]
- [[08 - Arithmetic Geometry/Concepts/Zeta Functions of Varieties|Zeta Functions of Varieties]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Imported inputs:** Section 8.3 Frobenius/dual-Frobenius identity, prime-to-residue-characteristic torsion preservation at good reduction, and Theorem 9.4.1 determinant formula. The recurrence and all singular point counts are derived here.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
