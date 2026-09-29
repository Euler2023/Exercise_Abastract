---
title: "Exercise LA442: Normalizers of Positive Diagonal Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercises, Exercise 26, printed p. 570, PDF p. 585"
created: 2026-09-29
---

# Exercise LA442: Normalizers of Positive Diagonal Matrices

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 26
> Let $G=SL_n(\mathbb C)$ and let $K$ be the complex unitary group. Let $A$ be the group of diagonal matrices with positive real components on the diagonal.
>
> (a) Show that if $g\in\operatorname{Nor}_G(A)$ (normalizer of $A$ in $G$), then $c(g)$ (conjugation by $g$) permutes the diagonal components of $A$, thus giving rise to a homomorphism $\operatorname{Nor}_G(A)\to W$ to the group $W$ of permutations of the diagonal coordinates.
>
> By definition, the kernel of the above homomorphism is the centralizer $\operatorname{Cen}_G(A)$.
>
> (b) Show that actually all permutations of the coordinates can be achieved by elements of $K$, so we get an isomorphism
>
> $$
> W\approx\operatorname{Nor}_G(A)/\operatorname{Cen}_G(A)
> \approx\operatorname{Nor}_K(A)/\operatorname{Cen}_K(A).
> $$
>
> In fact, the $K$ on the right can be taken to be the real unitary group, because permutation matrices can be taken to have real components ($0$ or $\pm1$).

> [!warning] Source notation: ambient groups and determinant one
> The printed $A$ includes all positive diagonal matrices, so it is a subgroup of $GL_n(\mathbb C)$ but is not generally contained in $G=SL_n(\mathbb C)$. Likewise the complex unitary group $U(n)$ is not a subgroup of $SL_n(\mathbb C)$; its determinant-one subgroup is $SU(n)$. Keep the printed $A$ and define the relative normalizer by $\operatorname{Nor}_H(A)=\{h\in H:hAh^{-1}=A\}$ inside the common ambient group $GL_n(\mathbb C)$, for each group $H$ under discussion. With this explicit interpretation the quotient conclusions hold as printed. They also hold for $SU(n)$, $O(n)$, and $SO(n)$. Signed permutation matrices are needed to realize odd permutations by determinant-one representatives.

## Hints

> [!hint]- Hint 1: Use a diagonal matrix with distinct entries
> If $D\in A$ has pairwise distinct positive diagonal entries and $gDg^{-1}$ is diagonal, then $g$ sends each coordinate line to a coordinate line.

> [!hint]- Hint 2: Correct the determinant of a permutation matrix
> If $P_\sigma$ has determinant $\varepsilon\in\{1,-1\}$, multiply it by $\operatorname{diag}(\varepsilon,1,\ldots,1)$. The product has determinant $1$ and induces the same coordinate permutation.

## Solution

> [!success]- Independent solution with explicit ambient-group conventions
> Take $n\ge1$ and write
>
> $$
> A=\{\operatorname{diag}(a_1,\ldots,a_n):a_i\in\mathbb R_{>0}\}
> \subseteq GL_n(\mathbb C).
> $$
>
> For a subgroup $H$ of $GL_n(\mathbb C)$ define the relative normalizer as above and define $\operatorname{Cen}_H(A)=\{h\in H:ha=ah\text{ for every }a\in A\}$.
>
> **(a) A normalizing matrix is monomial.** Choose $D=\operatorname{diag}(d_1,\ldots,d_n)$ with distinct positive $d_i$. If $g\in\operatorname{Nor}_{GL_n(\mathbb C)}(A)$, then $gDg^{-1}$ is diagonal and has the same distinct eigenvalues as $D$. Each eigenspace is a coordinate line. Since
>
> $$
> (gDg^{-1})(ge_i)=gDe_i=d_i ge_i,
> $$
>
> there are a permutation $\sigma$ and nonzero scalars $u_i$ such that $ge_i=u_i e_{\sigma(i)}$. The permutation is unique, and $g$ is a monomial matrix. Conversely, every such matrix conjugates a positive diagonal matrix to a positive diagonal matrix, with
>
> $$
> g\operatorname{diag}(a_1,\ldots,a_n)g^{-1}
> =\operatorname{diag}(a_{\sigma^{-1}(1)},\ldots,a_{\sigma^{-1}(n)}).
> $$
>
> Its action on coordinate lines gives a homomorphism $\theta_H:\operatorname{Nor}_H(A)\to S_n$ for every subgroup $H$: the action of a product is the composition of the actions. In particular this gives the required map for $H=G$, with $W=S_n$.
>
> A monomial matrix has trivial coordinate permutation precisely when it is diagonal. Diagonal matrices commute with every element of $A$. Conversely, a matrix commuting with $D$ has zero off-diagonal entries, because $(d_i-d_j)g_{ij}=0$ for $i\ne j$. Hence
>
> $$
> \ker\theta_H=\operatorname{Cen}_H(A).
> $$
>
> **(b) Every permutation has a determinant-one real orthogonal representative.** Given $\sigma\in S_n$, let $P_\sigma e_i=e_{\sigma(i)}$ and let $\varepsilon=\det P_\sigma$. Put
>
> $$
> D_\varepsilon=\operatorname{diag}(\varepsilon,1,\ldots,1),
> \qquad Q_\sigma=D_\varepsilon P_\sigma.
> $$
>
> Both factors are real orthogonal, and $\det Q_\sigma=\varepsilon^2=1$, so
>
> $$
> Q_\sigma\in SO(n)\subseteq SU(n)\subseteq SL_n(\mathbb C).
> $$
>
> The diagonal factor commutes with every diagonal matrix. Therefore conjugation by $Q_\sigma$ induces exactly the same permutation of $A$ as conjugation by $P_\sigma$. It follows that $\theta_H$ is onto for each of $H=SL_n(\mathbb C),U(n),SU(n),O(n),SO(n)$. The first isomorphism theorem now gives
>
> $$
> \operatorname{Nor}_H(A)/\operatorname{Cen}_H(A)\simeq S_n
> \qquad\text{for each of these five choices of }H.
> $$
>
> Taking $H=SL_n(\mathbb C)$ and $H=U(n)$ proves the printed quotient comparison via their respective actions on coordinates. Taking $H=O(n)$ proves the stated real-unitary version, and the construction proves the stronger determinant-one version with $SO(n)$. The representatives $Q_\sigma$ need not define a homomorphic section; only surjectivity of the coordinate action is required. For $n=1$, the permutation group is trivial and the same reasoning applies.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 26(a)–(b), printed p. 570, PDF p. 585], checked on the page image. The common ambient-group interpretation and the signed representatives are made explicit in the independent proof.
- **Notation boundary:** “Complex unitary” means $U(n)$ and “real unitary” means $O(n)$ under the usual conventions. Their determinant-one subgroups are $SU(n)$ and $SO(n)$. This note does not silently replace the printed $A$ by its determinant-one part.
- **Proof inputs and routing:** The calculation uses eigenspaces of a matrix with distinct diagonal entries, determinants, and the first isomorphism theorem for groups. The primary method is matrix conjugation, so the note is filed under Linear Algebra and Modules.
