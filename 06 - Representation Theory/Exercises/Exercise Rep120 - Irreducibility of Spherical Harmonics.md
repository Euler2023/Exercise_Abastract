---
title: "Exercise Rep120: Irreducibility of Spherical Harmonics"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - harmonic-polynomials
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercises, Exercise 35, printed pp. 551-552, PDF pp. 566-567"
created: 2026-09-26
---

# Exercise Rep120: Irreducibility of Spherical Harmonics

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 35 (continuation of Exercise 34)
> Prove that the representation of $O(n)=U_n(\mathbb R)$ on $\operatorname{Har}(n,d)$ is irreducible.
>
> **Printed proof guidance.** Lang cites Helgason, Vilenkin, and Howe–Tan, then sketches the Howe–Tan route. Use the $O(n)$-invariant Hermitian product
>
> $$
> (P,Q)=\int_{S^{n-1}}P(x)\overline{Q(x)}\,d\sigma(x).
> $$
>
> Evaluation $\lambda(P)=P(e_n)$ is $O(n-1)$-invariant, where $O(n-1)$ fixes $e_n$. Its representing harmonic polynomial $Q_n$ projects nontrivially onto every nonzero $O(n)$-submodule. An $O(n-1)$-invariant homogeneous polynomial has the form $\sum_{j+2k=d}c_jx_n^j r_{n-1}^{2k}$; show the harmonic condition determines its coefficients recursively and conclude irreducibility.

> [!info] Ground-field convention
> Exercise 34 works over an algebraically closed characteristic-$0$ field. This exercise introduces the real orthogonal group and a complex Hermitian integral. We prove the complex representation on $\operatorname{Har}_{\mathbb C}(n,d)$ for the inherited $n\ge3$, and deduce the real statement on $\operatorname{Har}_{\mathbb R}(n,d)$.

## Hints

> [!hint]- Hint 1
> The integral defines a positive-definite inner product: a homogeneous polynomial vanishing on the real unit sphere is zero. Orthogonal complements of invariant subspaces are invariant.

> [!hint]- Hint 2
> Set $z=X_n$ and $\rho=X_1^2+\cdots+X_{n-1}^2$. Every $O(n-1)$-invariant homogeneous polynomial is a sum of $c_kz^{d-2k}\rho^k$.

> [!hint]- Hint 3
> Apply $\Delta$ to that sum. A recurrence makes the space of $O(n-1)$-invariant harmonic polynomials at most one-dimensional. Then project the representing vector for evaluation onto a putative submodule and its orthogonal complement.

## Solution

> [!success]- Independently completed Howe–Tan argument
> Let $n\ge3$, $d\ge0$, and $\mathcal H=\operatorname{Har}_{\mathbb C}(n,d)$. Define the action by $(g\cdot P)(x)=P(g^{-1}x)$. Since $g$ is orthogonal, $\Delta(g\cdot P)=g\cdot(\Delta P)$, so $\mathcal H$ is stable. Rotation-invariance of $d\sigma$ gives a unitary representation for the printed Hermitian product, which is linear in its first argument.
>
> The product is positive definite. If its value on $(P,P)$ is zero, continuity makes $P$ vanish on the sphere. Homogeneity gives $P(x)=\|x\|^dP(x/\|x\|)=0$ for every nonzero real $x$, and a complex-coefficient polynomial vanishing on all of $\mathbb R^n$ is zero. Thus every invariant subspace has an invariant orthogonal complement.
>
> **The zonal harmonic line.** Write $z=X_n$ and $\rho=X_1^2+\cdots+X_{n-1}^2$. If a polynomial is fixed by the stabilizer $K=O(n-1)$ of $e_n$, its restriction to $(s,0,\ldots,0,z)$ is even in $s$, because a reflection sends $s$ to $-s$. Since $O(n-1)$ acts transitively on spheres in the first $n-1$ coordinates, the polynomial equals a polynomial in $\rho,z$ on all real points, hence identically. Homogeneity forces
>
> $$
> P=\sum_{k=0}^{\lfloor d/2\rfloor}c_k z^{d-2k}\rho^k.
> $$
>
> The two pieces of the Laplacian act by
>
> $$
> \frac{\partial^2}{\partial z^2}(z^j\rho^k)
> =j(j-1)z^{j-2}\rho^k,
> \qquad
> \Delta_{n-1}(z^j\rho^k)
> =2k(2k+n-3)z^j\rho^{k-1}.
> $$
>
> Comparing the coefficient of $z^{d-2k-2}\rho^k$ in $\Delta P=0$ gives, for $0\le k<\lfloor d/2\rfloor$,
>
> $$
> (d-2k)(d-2k-1)c_k
> +2(k+1)(2k+n-1)c_{k+1}=0.
> $$
>
> Every denominator $2(k+1)(2k+n-1)$ is nonzero, so $c_0$ determines every coefficient. Hence $\dim\mathcal H^K\le1$. This also covers $d=0,1$, when the recurrence is empty and a $K$-fixed polynomial is determined by $c_0$.
>
> **No proper nonzero invariant subspace.** The evaluation functional $\lambda(P)=P(e_n)$ is $K$-invariant. By finite-dimensional Hermitian duality there is a unique $Q_n\in\mathcal H$ with $\lambda(P)=(P,Q_n)$ for all $P$; its $K$-invariance follows from that of $\lambda$ and of the inner product.
>
> Suppose $0\ne M\subsetneq\mathcal H$ is $O(n)$-invariant. Its orthogonal complement $M^\perp$ is also a nonzero invariant subspace. Evaluation at $e_n$ is nonzero on each: if it vanished on an invariant subspace $N$, then for $P\in N$ and every $g\in O(n)$ we would have $P(g e_n)=0$; transitivity on the sphere and the preceding homogeneity argument would force $P=0$. Thus the orthogonal projections $Q_M$ and $Q_{M^\perp}$ of $Q_n$ are both nonzero. The projections commute with $K$, so both vectors lie in the at-most-one-dimensional space $\mathcal H^K$. They are also orthogonal. Two nonzero vectors in a positive-definite one-dimensional space cannot be orthogonal. This contradiction proves $\mathcal H$ is irreducible over $\mathbb C$.
>
> Finally, if the real space $\operatorname{Har}_{\mathbb R}(n,d)$ had a proper nonzero invariant real subspace, its complexification would be a proper nonzero invariant subspace of $\mathcal H$. Hence the real representation is irreducible as well.

## Related Concepts

- [[04 - Linear Algebra and Modules/Exercises/Exercise LA415 - Fischer Pairing and Harmonic Decomposition|Exercise LA415]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA416 - Isotropic Powers Span Harmonic Polynomials|Exercise LA416]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- **Source and proof status:** The exercise begins at [S2, Ch. XIII, Ex. 35, printed p. 551, PDF p. 566], and its bibliography and Howe–Tan sketch continue on printed p. 552 / PDF p. 567. The recurrence and final orthogonal-projection contradiction are supplied independently; no theorem from the cited books is imported.
- **Printed references:** Helgason, *Topics in Harmonic Analysis on Homogeneous Spaces* (1981), §3, Theorem 3.1(ii); Vilenkin, *Special Functions and the Theory of Group Representations* (1968), Chapter IX, §2; and Howe–Tan, *Non-Abelian Harmonic Analysis* (1992). Their citations and the source's sketch are background context; the solution above supplies the missing derivation.
- **Notation boundary:** Lang writes $O(n)=U_n(\mathbb R)$ for the real orthogonal group; this is distinct from the complex unitary group $U(n)$. The source switches from Exercise 34's algebraically closed field to real orthogonal symmetry and a complex Hermitian inner product, so both scalar fields are made explicit above.
