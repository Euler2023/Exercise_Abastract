---
title: "Exercise R290: Homogeneous Primary Decomposition and the Degree of the Hilbert Polynomial"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - commutative-algebra
  - primary-decomposition
  - hilbert-polynomial
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercises, Exercise 14, printed p. 444, PDF p. 459"
created: 2026-09-22
---

# Exercise R290: Homogeneous Primary Decomposition and the Degree of the Hilbert Polynomial

## Problem Statement

> [!question] Lang, Chapter X, Exercise 14
> (a) Prove Proposition 6.7(b).
>
> (b) Prove that the degree of the polynomial $P$ in Theorem 6.9 is exactly $r$.

### Full context of the referenced statements

Let $k$ be a field, let $N\ge0$, give $A=k[X_0,\ldots,X_N]$ its total-degree grading, and let $\mathfrak a$ be a homogeneous ideal. Write

$$
A_n=\{\text{homogeneous polynomials of degree }n\}\cup\{0\},
\qquad
\mathfrak a_n=\mathfrak a\cap A_n,
\qquad
\chi(n,\mathfrak a)=\dim_k(A_n/\mathfrak a_n).
$$

These definitions appear in [S2, Ch. X, §6, printed p. 434, PDF p. 449]. The following restatements supply the context referenced by the exercise; they are not additional parts of the problem.

> [!info] Proposition 6.7(b): Homogeneous primary decomposition
> A homogeneous ideal $\mathfrak a$ admits a reduced primary decomposition
> $$
> \mathfrak a=\mathfrak q_1\cap\cdots\cap\mathfrak q_s,
> $$
> in which every $\mathfrak q_i$ is homogeneous. Here "reduced" means that the radicals $\sqrt{\mathfrak q_i}$ are pairwise distinct and no component can be omitted.
>
> See [S2, Ch. X, Proposition 6.7(b), printed p. 436, PDF p. 451]; the definition of a reduced decomposition is in [S2, Ch. X, §3, printed p. 422, PDF p. 437]. The proof of Proposition 6.7 explicitly leaves (b) as an exercise.

> [!info] Theorem 6.9: The Hilbert polynomial and its degree bound
> Let $Z$ be the algebraic set defined by $\mathfrak a$ in projective space, and let $r$ be the maximum dimension of its irreducible components. There exists $P\in\mathbf Q[T]$ such that $P(\mathbf Z)\subseteq\mathbf Z$, $\deg P\le r$, and, for every sufficiently large integer $n$,
> $$
> P(n)=\chi(n,\mathfrak a).
> $$
> The source first permits extension of $k$ to an algebraic closure, which leaves the Hilbert function unchanged. A nonempty irreducible projective component defined by a homogeneous prime ideal $\mathfrak p$ has dimension
> $$
> \operatorname{tr.deg}_k\operatorname{Frac}(A/\mathfrak p)-1.
> $$
> The dimension convention, field-extension observation, and theorem statement occur in [S2, Ch. X, §6, printed p. 437, PDF p. 452]; the theorem is proved on printed p. 438, PDF p. 453.

> [!warning] Source issue: The empty projective set and the unit ideal
> The degree equality in (b) requires $Z\ne\varnothing$. If $Z=\varnothing$, there is no maximum dimension among its irreducible components; the Hilbert function is eventually zero, and its polynomial is zero, whose degree requires a separate convention. Neither the printed theorem nor the exercise explicitly separates this boundary case, although the subsequent Remark on printed p. 438 assumes that $Z$ is nonempty. The original exercise is preserved above, and the solution treats the nonempty and empty cases separately. In (a), the unit ideal is handled by the convention that an empty intersection equals $A$; proper ideals have ordinary nonempty primary decompositions.

## Hints

> [!hint]- Hint 1
> (a) For an ideal $I$, consider its largest homogeneous subideal $I^{\mathrm h}=\bigoplus_{n\ge0}(I\cap A_n)$. Apply this operation to the components of an ordinary primary decomposition.
>
> (b) Choose an irreducible component of maximum dimension. How many algebraically independent coordinate generators can be selected in the fraction field of its homogeneous coordinate ring?

> [!hint]- Hint 2
> (a) First show that, in a nonnegatively graded commutative ring, if every nonnilpotent homogeneous element is a non-zero-divisor, then every nonnilpotent element is a non-zero-divisor. For a general element, select its highest-degree nonnilpotent component and collect the higher-degree nilpotent components. Use the fact that a regular element plus a nilpotent element is regular.
>
> (b) The monomials of total degree $n$ in $r+1$ algebraically independent elements of degree $1$ are linearly independent, and there are $\binom{n+r}{r}$ of them. This gives a lower bound of order $n^r$ for $\chi(n,\mathfrak a)$.

## Solution

> [!success]- Solution
> ### Source inputs and proof scope
> The following is an independent derivation. We use the Hilbert basis theorem in the form that a polynomial ring in finitely many variables over a field is Noetherian, recalled in [S2, Ch. X, §1, printed p. 416, PDF p. 431]. We also use the fact that every submodule of a Noetherian module has a finite primary decomposition [S2, Ch. X, Theorem 3.3, printed p. 423, PDF p. 438]. For (b), we use the existence assertion and degree upper bound of Theorem 6.9, as proved in the source; the requested degree equality is not an input.
>
> ### (a) Step 1: Passing from homogeneous elements to arbitrary elements
> Let $R=\bigoplus_{n\ge0}R_n$ be a nonzero commutative graded ring in which every nonnilpotent homogeneous element is regular, meaning that multiplication by it is injective. We prove that every nonnilpotent $y=\sum_i y_i\in R$ is regular.
>
> A finite sum of nilpotent elements is nilpotent: if $u_i^{e_i}=0$, then $\left(\sum_i u_i\right)^{1+\sum_i(e_i-1)}=0$, since every monomial in the expansion has some $u_i$ with exponent at least $e_i$. Therefore at least one $y_i$ is nonnilpotent. Take the largest such index $d$ and write
> $$
> y=w+z,\qquad w=\sum_{i\le d}y_i,\qquad z=\sum_{i>d}y_i.
> $$
> The element $z$ is nilpotent, whereas $y_d$ is regular. If $0\ne x=\sum_j x_j$ and $e$ is the highest nonzero degree of $x$, the degree-$d+e$ component of $wx$ is $y_dx_e\ne0$. Thus $w$ is regular.
>
> Choose $m$ such that $z^m=0$. If $yx=0$, then $wx=-zx$, and repeated multiplication using commutativity gives
> $$
> w^m x=(-z)^m x=0.
> $$
> Since $w$ is regular, so is $w^m$, and hence $x=0$. Therefore $y$ is regular, proving the criterion. Equivalently, every zero divisor in such a ring is nilpotent, so its zero ideal is primary.
>
> ### (a) Step 2: The homogeneous part of a primary ideal is primary
> For an ideal $I\subseteq A$, define
> $$
> I^{\mathrm h}=\bigoplus_{n\ge0}(I\cap A_n).
> $$
> This is an ideal: the product of $f\in I\cap A_n$ and $g\in A_m$ lies in $I\cap A_{n+m}$, and the general case follows by expanding into homogeneous components. It is contained in $I$ and is the largest homogeneous ideal contained in $I$.
>
> Suppose $I=Q$ is primary. Then $R=A/Q^{\mathrm h}$ is a nonzero graded ring. Let $\bar g$ be a nonnilpotent homogeneous element and $\bar f$ a homogeneous element with $\bar f\bar g=0$. Choose homogeneous representatives $f,g$. We have $fg\in Q^{\mathrm h}\subseteq Q$. If $\bar f\ne0$, then $f\notin Q^{\mathrm h}$, which, because $f$ is homogeneous, is equivalent to $f\notin Q$. Primaryness gives $g^m\in Q$ for some $m$. Since $g^m$ is homogeneous, it belongs to $Q^{\mathrm h}$, contradicting the choice of $\bar g$.
>
> Thus multiplication by $\bar g$ is injective on every homogeneous component. Since $\bar g$ is homogeneous, products arising from distinct degrees cannot cancel, so multiplication by it is injective on all of $R$. Step 1 now shows that every nonnilpotent element of $R$ is regular. Equivalently, $Q^{\mathrm h}$ is primary.
>
> ### (a) Step 3: Constructing a reduced homogeneous decomposition
> Suppose $\mathfrak a\ne A$. Since $A$ is Noetherian, Theorem 3.3 gives an ordinary finite primary decomposition
> $$
> \mathfrak a=Q_1\cap\cdots\cap Q_t.
> $$
> Since $\mathfrak a$ is homogeneous, every homogeneous component of $f\in\mathfrak a$ belongs to every $Q_i$. Consequently,
> $$
> \mathfrak a=Q_1^{\mathrm h}\cap\cdots\cap Q_t^{\mathrm h}.
> $$
> Each component is a homogeneous primary ideal by Step 2. Intersect all components having the same radical $\mathfrak p$. Their intersection is again $\mathfrak p$-primary: if $fg$ belongs to the intersection but $f$ does not, choose a component not containing $f$ to obtain $g\in\mathfrak p$; a sufficiently large common power of $g$ then belongs to every component in this group. The radical of their finite intersection is still $\mathfrak p$. This is also the ideal case of the source's Proposition 3.1 [S2, Ch. X, printed p. 421, PDF p. 436].
>
> These intersections preserve homogeneity. Finally, delete redundant components until none remain; this process terminates because there are finitely many components. The resulting primary decomposition is homogeneous, irredundant, and has pairwise distinct radicals, as required by Proposition 6.7(b). The unit ideal is handled by the empty-intersection convention.
>
> ### (b) Step 1: Independent elements of degree one on a largest component
> Assume $Z\ne\varnothing$. As in the source's field-extension step on printed p. 437, we may discuss geometric components over an algebraic closure $K$ of $k$:
> $$
> (K[X]/\mathfrak aK[X])_n\cong K\otimes_k(A/\mathfrak a)_n,
> $$
> Thus each graded dimension, and hence the Hilbert polynomial, is unchanged. For the rest of this argument, denote the enlarged field again by $k$, and let $r$ refer to these geometric components.
>
> Choose an irreducible component of $Z$ of dimension $r$, and let $\mathfrak p\supseteq\mathfrak a$ be its homogeneous prime ideal. Put
> $$
> B=A/\mathfrak p=k[x_0,\ldots,x_N],
> \qquad x_i=X_i+\mathfrak p.
> $$
> Then $B$ is a domain. By the source's definition of projective dimension,
> $$
> \operatorname{tr.deg}_k k(x_0,\ldots,x_N)=r+1.
> $$
> Choose a maximal algebraically independent subset of $\{x_0,\ldots,x_N\}$. Every remaining $x_i$ is algebraic over the rational function field generated by this subset, so the subset is a transcendence basis and has exactly $r+1$ elements. After renumbering, denote them by $x_0,\ldots,x_r$. All are homogeneous of degree $1$.
>
> ### (b) Step 2: Counting monomials gives the required lower bound
> For every $n\ge0$, the monomials
> $$
> x_0^{a_0}\cdots x_r^{a_r},
> \qquad a_i\ge0,\qquad a_0+\cdots+a_r=n,
> $$
> belong to $B_n$ and are linearly independent; a linear dependence would be a nonzero polynomial relation among $x_0,\ldots,x_r$. There are $\binom{n+r}{r}$ such monomials.
>
> Since $\mathfrak a\subseteq\mathfrak p$, the natural surjection $A/\mathfrak a\twoheadrightarrow B$ is surjective on every homogeneous component. Therefore
> $$
> \chi(n,\mathfrak a)\ge\dim_k B_n\ge\binom{n+r}{r}
> \qquad(n\ge0).
> $$
> Theorem 6.9 already gives $P(n)=\chi(n,\mathfrak a)$ for sufficiently large $n$ and $\deg P\le r$. If $r\ge1$ and $\deg P<r$, then $P(n)/n^r\to0$, whereas the displayed lower bound divided by $n^r$ tends to $1/r!>0$, a contradiction. If $r=0$, the lower bound is $1$, so $P$ is a nonzero constant. Thus $\deg P=r$ in both cases.
>
> ### (b) The empty projective set
> Return to the original field $k$. If $\mathfrak a=A$, then $\chi(n,\mathfrak a)=0$. Suppose $\mathfrak a\ne A$ but $Z=\varnothing$. Set $A_K=K[X_0,\ldots,X_N]$, $\mathfrak a_K=\mathfrak a A_K$, and $\mathfrak m_K=(X_0,\ldots,X_N)A_K$, where $K$ is an algebraic closure of $k$. The affine zero set of $\mathfrak a_K$ consists only of the origin. The Hilbert Nullstellensatz gives positive integers $e_i$ with $X_i^{e_i}\in\mathfrak a_K$. For $s=1+\sum_i(e_i-1)$, every monomial of degree $s$ is divisible by some $X_i^{e_i}$, so $\mathfrak m_K^s\subseteq\mathfrak a_K$.
>
> Hence $(A_K/\mathfrak a_K)_n=0$ for $n\ge s$. The graded dimension equality from Step 1 now gives $(A/\mathfrak a)_n=0$ for the same $n$, so $P=0$. This is the situation of Proposition 6.7(a); the relation between the Nullstellensatz and irrelevant ideals is also explained in [S2, Ch. X, §6, printed p. 436, PDF p. 451]. The appropriate conclusion here is that the Hilbert polynomial is zero, rather than a degree equality with an undefined $r$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Primary Ideals and Primary Decomposition|Primary Ideals and Primary Decomposition]]
- [[02 - Ring Theory/Concepts/Filtered and Graded Algebras|Filtered and Graded Algebras]]
- [[02 - Ring Theory/Concepts/Hilbert Functions and Hilbert Polynomials|Hilbert Functions and Hilbert Polynomials]]
- [[03 - Field Theory/Concepts/Transcendence Bases and Transcendence Degree|Transcendence Bases and Transcendence Degree]]
- [[02 - Ring Theory/Concepts/Hilbert Nullstellensatz|Hilbert Nullstellensatz]]
- [[02 - Ring Theory/Concepts/Krull Dimension and Catenarity|Krull Dimension and Catenarity]]

## Notes

- **Source and proof status:** The complete English exercise was checked against [S2, Ch. X, Exercise 14, printed p. 444, PDF p. 459]. The referenced statements and dimension convention were checked on printed pp. 434, 436–438 / PDF pp. 449, 451–453. The homogeneous decomposition proof and degree lower bound above are independent derivations; the exercise page does not provide their solutions.
- **Inputs not reproved here:** The stated case of the Hilbert basis theorem, ordinary primary decomposition from Theorem 3.3, existence and the degree upper bound from Theorem 6.9, and the Hilbert Nullstellensatz in the empty-set discussion. Their uses and precise source locations are identified above. The solution does not require Noether normalization, Krull's principal ideal theorem, or a general theorem on dimensions of hyperplane sections.
- **Terminology:** A reduced primary decomposition is irredundant and has distinct radicals. It does not assert that the quotient ring is reduced or that every primary component is prime.
- **What is being counted:** $\chi(n,\mathfrak a)$ is the dimension in exactly degree $n$, not the cumulative dimension through degree $n$; their polynomial growth degrees generally differ by $1$.
