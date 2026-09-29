---
title: "Exercise Rep126: Representations of S4 and A4"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - characters
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 2, printed p. 723, PDF p. 738"
created: 2026-09-29
---

# Exercise Rep126: Representations of S4 and A4

## Problem Statement

> [!question] Lang XVIII.2 — The groups $S_4$ and $A_4$
> Let $S_4$ be the symmetric group on $4$ elements.
>
> (a) Show that there are $5$ conjugacy classes.
>
> (b) Show that $A_4$ has a unique subgroup of order $4$, which is not cyclic, and which is normal in $S_4$. Show that the factor group is isomorphic to $S_3$, so the representations of Exercise 1 give rise to representations of $S_4$.
>
> (c) Using the relation $\sum d_i^2=\#(S_4)=24$, conclude that there are only two other irreducible characters of $S_4$, each of dimension $3$.
>
> (d) Let $X^4+a_2X^2+a_1X+a_0$ be an irreducible polynomial over a field $k$, with Galois group $S_4$. Show that the roots generate a $3$-dimensional vector space $V$ over $k$, and that the representation of $S_4$ on this space is irreducible, so we obtain one of the two missing representations.
>
> (e) Let $\rho$ be the representation of (d). Define $\rho'$ by
>
> $$
> \rho'(\sigma)=\rho(\sigma)\text{ if }\sigma\text{ is even};\qquad
> \rho'(\sigma)=-\rho(\sigma)\text{ if }\sigma\text{ is odd}.
> $$
>
> Show that $\rho'$ is also irreducible, remains irreducible after tensoring with $k^a$, and is non-isomorphic to $\rho$. This concludes the description of all irreducible representations of $S_4$.
>
> (f) Show that the $3$-dimensional irreducible representations of $S_4$ provide an irreducible representation of $A_4$.
>
> (g) Show that all irreducible representations of $A_4$ are given by the representations in (f) and three others which are one-dimensional.

> [!info] Inherited assumptions and the quotient in (b)
> The character classification is over $\mathbb C$. For the root model, Lang's chapter convention is $\operatorname{char}k\nmid24$ [printed p. 667, PDF p. 682]. The proofs of (d)–(f) below in fact work whenever $\operatorname{char}k\ne2$. In (b), the quotient meant is $S_4/V_4\simeq S_3$; $A_4/V_4$ is instead $C_3$.

## Hints

> [!hint]- Hint 1: Use two permutation actions
> The action on the three partitions of four letters into two unordered pairs has kernel the Klein four group. The action on four letters has a three-dimensional sum-zero subspace.

> [!hint]- Hint 2: Twist by sign and restrict to the Klein four group
> A transposition has trace $1$ on the three-dimensional standard module, so its sign twist has trace $-1$. On restriction to $V_4$, the standard module splits into its three distinct nontrivial character lines, permuted transitively by $A_4$.

## Solution

> [!success]- Independent classification and root-space construction
> **(a).** Conjugacy in $S_4$ is determined by cycle type. The types, with their class sizes, are
>
> $$
> 1^4:1,\qquad 2\,1^2:6,\qquad 2^2:3,
> \qquad 3\,1:8,\qquad 4:6.
> $$
>
> These exhaust the $24$ permutations, giving five classes.
>
> **(b).** The set $V_4=\{1,(12)(34),(13)(24),(14)(23)\}$ is a subgroup: each nonidentity element has order $2$, and the product of two distinct such elements is the third. It lies in $A_4$ and is normal in $S_4$, since conjugation preserves double transpositions. The only elements of order $2$ in $A_4$ are these three, and $A_4$ has no element of order $4$. A subgroup of order $4$ must therefore be noncyclic and contain exactly these three involutions. This proves uniqueness.
>
> Act on the three pairings $12|34$, $13|24$, $14|23$. The action homomorphism $S_4\to S_3$ sends a transposition to a transposition of pairings and a $3$-cycle to a $3$-cycle, so it is surjective. The subgroup $V_4$ is in its kernel, and the kernel has order $24/6=4$, hence is exactly $V_4$. Inflating the three irreducibles of $S_3$ gives irreducibles of $S_4$ of dimensions $1,1,2$.
>
> **(c).** There are five complex irreducible characters. There are only two one-dimensional characters: all transpositions must have the same scalar $\pm1$, and they generate $S_4$, yielding just the trivial and sign characters. The two remaining degrees $d,e\ge2$ satisfy
>
> $$
> d^2+e^2=24-1-1-4=18.
> $$
>
> If either degree were $2$, the other square would be $14$; if either were at least $4$, the sum would be at least $20$. Thus $d=e=3$.
>
> **(d).** Let $\alpha_1,\ldots,\alpha_4$ be the roots in the splitting field, so $\sum_i\alpha_i=0$, and let
>
> $$
> W_k=\{(x_1,x_2,x_3,x_4)\in k^4:\sum_i x_i=0\}.
> $$
>
> If $\operatorname{char}k\ne2$, then $4$ is invertible and $k^4=k(1,1,1,1)\oplus W_k$. The equivariant map $k^4\to V$, $e_i\mapsto\alpha_i$, kills the constant line, so its restriction to $W_k$ is surjective and nonzero.
>
> Every nonzero invariant subspace $U\subseteq W_k$ contains a nonconstant vector $u$, since a constant vector in $W_k$ is zero. For unequal coordinates $u_i,u_j$, the vector $u-(ij)u=(u_i-u_j)(e_i-e_j)$ puts $e_i-e_j$ in $U$. Its $S_4$-translates span $W_k$. Hence $W_k$ is simple, and the same argument over every extension field proves absolute simplicity. The nonzero surjection $W_k\to V$ is therefore an isomorphism. This proves $\dim V=3$ and the asserted irreducibility.
>
> **(e).** The formula is $\rho'=\mathrm{sgn}\otimes\rho$, so it is a representation. Multiplication by the nonzero scalar $\mathrm{sgn}(\sigma)$ does not change invariant subspaces; the same holds after any scalar extension. Thus $\rho'$ is absolutely irreducible. On $W_k$, a transposition has trace $2-1=1$: it fixes two coordinate basis vectors in $k^4$, and its trace on the constant line is $1$. The sign twist has trace $-1$. These are different when $\operatorname{char}k\ne2$, so $\rho$ and $\rho'$ are not isomorphic.
>
> For reference, the complete complex character table, with columns in the cycle-type order of (a), is
>
> $$
> \begin{array}{c|rrrrr}
> &1^4&2\,1^2&2^2&3\,1&4\\\hline
> 1&1&1&1&1&1\\
> \mathrm{sgn}&1&-1&1&1&-1\\
> \text{inflated degree }2&2&0&2&-1&0\\
> \rho&3&1&-1&0&-1\\
> \rho'&3&-1&-1&0&1
> \end{array}
> $$
>
> The fourth row is the number of fixed letters minus $1$, the fifth is its sign twist, and the third comes from the pairing action and Rep125.
>
> **(f).** The two restrictions to $A_4$ are equal, since sign is trivial there. We prove irreducibility over every field of characteristic different from $2$, including after extension to $k^a$. The vectors
>
> $$
> u_1=(1,1,-1,-1),\quad
> u_2=(1,-1,1,-1),\quad
> u_3=(1,-1,-1,1)
> $$
>
> form a basis of $W_k$; a $3\times3$ minor of this matrix of columns is $\pm4$. Under $V_4$, their lines afford the three distinct nontrivial characters, with values $\pm1$. For each such character $\lambda$, the averaging operator $(1/4)\sum_{a\in V_4}\lambda(a)^{-1}a$ projects onto its character line: on a character $\nu$ its scalar is $(1/4)\sum_a\lambda(a)^{-1}\nu(a)$, equal to $1$ if $\lambda=\nu$ and to $0$ otherwise by pairing terms against an element on which the characters differ. Thus every $V_4$-invariant subspace decomposes into these lines. Conjugation by the $3$-cycles of $A_4$ permutes the three nontrivial characters transitively, so any nonzero $A_4$-invariant subspace contains all three lines. The restriction is irreducible.
>
> **(g).** The quotient $A_4/V_4$ has order $3$ and is cyclic. Its three complex characters, obtained by sending a generator to $1,\omega,\omega^2$ with $\omega^3=1$ and $\omega\ne1$, inflate to three distinct one-dimensional representations of $A_4$. Together with the degree-$3$ representation of (f), their squared degrees sum to $1+1+1+9=12=|A_4|$. The regular-representation degree identity shows that no further irreducibles exist. The two degree-$3$ representations of $S_4$ therefore give a single isomorphism class on $A_4$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Isotypic Components and Clifford Theory|Isotypic Components and Clifford Theory]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group Algebra]]
- [[06 - Representation Theory/Exercises/Exercise Rep125 - Representations of S3 from Cubic Roots|Exercise Rep125]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]

## Notes

- **Source and proof status:** All seven parts and both formulas defining $\rho'$ were checked at [S2, Ch. XVIII, Ex. 2, printed p. 723, PDF p. 738]. The chapter's characteristic convention is at printed p. 667, PDF p. 682. Character counts and squared-degree sums use [S2, Ch. XVIII, Corollary 5.13 and Theorem 5.15, printed pp. 683–684, PDF pp. 698–699]. The group actions, root model, sign twist, and restriction argument are independent derivations.
- **Characteristic and field boundaries:** In characteristic $2$, sign is trivial, so the distinction in (e) is impossible. The characteristic assumption is inherited, not an unannounced correction of the source. Part (g) is the complex classification; over a field lacking primitive cube roots of unity, the three one-dimensional characters of $A_4/V_4$ need not all be defined. The two complex degree-$3$ representations restrict to the same representation of $A_4$.
- **Root-space boundary:** Scalar extension means the tensor product of the representation space with $k^a$, not the span of the roots viewed merely as scalars in $k^a$.
