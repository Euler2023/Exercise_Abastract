---
title: "Exercise LA8: Structure of the Symplectic Group"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - symplectic-groups
  - group-actions
  - path-connectedness
  - determinants
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 1, Ex. 1.7, printed p. 283, PDF p. 295"
figures:
  - "[[Attachments/hong-wang-student-assignment-symplectic-determinant-p01.png]]"
  - "[[Attachments/hong-wang-student-assignment-symplectic-determinant-p02.png]]"
  - "[[Attachments/hong-wang-student-assignment-symplectic-determinant-p03.png]]"
created: 2026-08-10
---

# Exercise LA8: Structure of the Symplectic Group

## Problem Statement

> [!question] Exercise (as printed)
> Prove that:
>
> **(a)** the symplectic group $SP_{2n}$ operates transitively on $\mathbb R^{2n}$;
>
> **(b)** $SP_{2n}$ is path-connected;
>
> **(c)** symplectic matrices have determinant $1$.

> [!warning] Source issue in part (a)
> The printed statement cannot be literally correct for the usual linear action: every matrix fixes $0$, so the orbit of $0$ is $\{0\}$. The mathematically correct intended statement is that $SP_{2n}$ acts transitively on
> $$
> \mathbb R^{2n}\setminus\{0\}.
> $$
> The proof below uses this corrected reading while preserving the printed wording above.

## Manuscript Images

> [!note] Provenance
> The photographs are reproduced from a [WeChat article supplied by the user](https://mp.weixin.qq.com/s/5755XjZKdn8eOwSU_fMxDQ), whose public-account watermark is visible on the pages. The article presents them as a student-era assignment by Hong Wang, one of the [2026 Fields Medalists announced by the International Mathematical Union](https://www.mathunion.org/imu-awards/fields-medal/fields-medals-2026). The WeChat article is the direct image source, while the official IMU announcement independently verifies her Fields Medal. No institutional archival record for the assignment's authorship or date has been checked. The manuscript is not Artin's printed solution; it gives an external inductive argument for part (c), audited and completed below.

### Page 1

![[Attachments/hong-wang-student-assignment-symplectic-determinant-p01.png]]

*Beginning of the induction and the nondegenerate invariant-plane case. Asset type: photograph reproduced from the cited WeChat article.*

### Page 2

![[Attachments/hong-wang-student-assignment-symplectic-determinant-p02.png]]

*The isotropic invariant-plane case and its block-matrix calculation. Asset type: photograph reproduced from the cited WeChat article.*

> [!warning] Reading of the second case
> The opening condition of the second case must be $\omega(y_1,y_2)=0$. A symbol resembling $>0$ would be meaningless over $\mathbb C$ and would not complement the first case $\omega(y_1,y_2)\ne0$.

### Page 3

![[Attachments/hong-wang-student-assignment-symplectic-determinant-p03.png]]

*Conclusion of the induction and passage from complex to real matrices. Asset type: photograph reproduced from the cited WeChat article.*

## Hints

> [!hint]- Hint 1
> Extend each nonzero vector to a symplectic basis.

> [!hint]- Hint 2
> For path-connectedness, use the polar decomposition $P=QR$. Show that both factors remain symplectic and that the orthogonal symplectic group is isomorphic to $U_n$.

> [!hint]- Hint 3
> The determinant equation gives only $(\det P)^2=1$. Use part (b) to choose the sign.

## Solution

> [!success]- Solution
> Let
> $$
> J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix},
> \qquad
> \omega(x,y)=x^{\mathsf T}Jy.
> $$
>
> ### (a) Transitivity on nonzero vectors
> Let $v\ne0$. Since $\omega$ is nondegenerate, there is a vector $w$ such that $\omega(v,w)=1$. The restriction of $\omega$ to
> $$
> U=\operatorname{span}(v,w)
> $$
> is nondegenerate. Hence
> $$
> \mathbb R^{2n}=U\oplus U^{\perp_\omega},
> $$
> and the restriction of $\omega$ to $U^{\perp_\omega}$ is again nondegenerate. Repeating this argument inductively extends $v,w$ to a symplectic basis
> $$
> v=e_1,e_2,\ldots,e_n,w=f_1,f_2,\ldots,f_n.
> $$
> Given nonzero vectors $v$ and $v'$, extend each to a symplectic basis. The linear map sending the first basis to the second preserves all pairings between basis vectors, so it preserves $\omega$ and lies in $SP_{2n}$. It sends $v$ to $v'$. Thus $SP_{2n}$ acts transitively on $\mathbb R^{2n}\setminus\{0\}$.
>
> ### (b) Path-connectedness
> Take $P\in SP_{2n}$ and set
> $$
> A=P^{\mathsf T}P.
> $$
> The matrix $A$ is symmetric positive-definite. From $P^{\mathsf T}JP=J$ one also obtains $PJP^{\mathsf T}=J$, and hence
> $$
> AJA=P^{\mathsf T}(PJP^{\mathsf T})P=J.
> $$
> Therefore $A$ is symplectic. Let
> $$
> R=A^{1/2}
> $$
> be its positive-definite square root. The identity $AJA=J$ is equivalent to
> $$
> J^{-1}AJ=A^{-1}.
> $$
> By the spectral functional calculus,
> $$
> J^{-1}A^sJ=A^{-s}
> $$
> for every real $s$. Thus every $A^s$ is symplectic; in particular, $R$ is symplectic.
>
> Put $Q=PR^{-1}$. Then $Q$ is symplectic, and
> $$
> Q^{\mathsf T}Q
> =R^{-1}P^{\mathsf T}PR^{-1}
> =R^{-1}AR^{-1}=I,
> $$
> so $Q$ is also orthogonal. The path
> $$
> \gamma_1(s)=QA^{{s}/{2}},
> \qquad 0\le s\le1,
> $$
> lies in $SP_{2n}$ and joins $Q$ to $P$.
>
> It remains to connect $Q$ to $I$. If a matrix is both orthogonal and symplectic, then it commutes with $J$. Such matrices have block form
> $$
> Q=\begin{pmatrix}X&Y\\-Y&X\end{pmatrix},
> $$
> and $Q^{\mathsf T}Q=I$ is equivalent to the complex matrix $X-iY$ being unitary. Hence
> $$
> SP_{2n}\cap O_{2n}\cong U_n.
> $$
> By the spectral theorem, every $U\in U_n$ has the form
> $$
> U=V\operatorname{diag}(e^{i\theta_1},\ldots,e^{i\theta_n})V^*,
> $$
> and
> $$
> U_s=V\operatorname{diag}(e^{is\theta_1},\ldots,e^{is\theta_n})V^*
> $$
> is a path from $I$ to $U$. Thus $U_n$, and therefore $SP_{2n}\cap O_{2n}$, is path-connected. Concatenating this path with $\gamma_1$ connects $I$ to $P$. Hence $SP_{2n}$ is path-connected.
>
> ### (c) The determinant
> Taking determinants in
> $$
> P^{\mathsf T}JP=J
> $$
> gives
> $$
> (\det P)^2\det J=\det J,
> $$
> so $\det P\in\{1,-1\}$. Along a path of invertible matrices, the determinant cannot change sign. By part (b), every $P\in SP_{2n}$ can be joined to $I$, whose determinant is $1$. Therefore
> $$
> \det P=1
> $$
> for every symplectic matrix $P$. $\square$
>
> ### Alternative inductive proof of part (c)
> This proof is adapted from the user-supplied manuscript above. The argument is algebraic: it uses an invariant two-dimensional subspace and does not depend on path-connectedness.
>
> Let $P\in SP_{2n}(\mathbb R)$. Extend scalars from $\mathbb R$ to $\mathbb C$, and let $T$ be the resulting complex-linear operator on
> $$
> V_{\mathbb C}=\mathbb C\otimes_{\mathbb R}\mathbb R^{2n}.
> $$
> The complex-bilinear extension of $\omega$ is still nondegenerate, $T$ still preserves it, and the determinant of $T$ over $\mathbb C$ is the same number as the determinant of $P$ over $\mathbb R$. It therefore suffices to work over $\mathbb C$.
>
> We use strong induction on $n$. The case $n=0$ is empty. For $n=1$, every $2\times2$ matrix $M$ satisfies
> $$
> M^{\mathsf T}
> \begin{pmatrix}0&1\\-1&0\end{pmatrix}M
> =(\det M)
> \begin{pmatrix}0&1\\-1&0\end{pmatrix}.
> $$
> Thus a symplectic $2\times2$ matrix has determinant $1$.
>
> Now let $n\ge2$ and assume the result in all smaller symplectic dimensions. Jordan normal form supplies a two-dimensional $T$-invariant subspace $W$: a Jordan block of size at least $2$ supplies its first two Jordan vectors, while if every block has size $1$, any two eigenvectors span such a subspace. Since an alternating form on a two-dimensional space has rank either $2$ or $0$, there are two cases.
>
> #### Case 1: $\omega|_W$ is nondegenerate
> In this case
> $$
> V_{\mathbb C}=W\oplus W^{\perp_\omega}.
> $$
> The symplectic complement is $T$-invariant. Indeed, if $x\in W^{\perp_\omega}$ and $w\in W$, then $T(W)=W$, so $w=T(u)$ for some $u\in W$, and
> $$
> \omega(Tx,w)=\omega(Tx,Tu)=\omega(x,u)=0.
> $$
> Hence both restrictions $T|_W$ and $T|_{W^{\perp_\omega}}$ are symplectic. The first has determinant $1$ by the two-dimensional case, and the second has determinant $1$ by induction. Therefore
> $$
> \det T
> =\det(T|_W)\det(T|_{W^{\perp_\omega}})=1.
> $$
>
> #### Case 2: $\omega|_W=0$
> Now $W$ is isotropic, so $W\subset W^{\perp_\omega}$. The same calculation as above shows that $W^{\perp_\omega}$ is $T$-invariant. Choose a basis $e_1,e_2$ of $W$. Nondegeneracy makes the map
> $$
> V_{\mathbb C}\longrightarrow W^*,
> \qquad
> v\longmapsto\omega(-,v)|_W
> $$
> surjective, so there are vectors $f_1,f_2$ such that $\omega(e_i,f_j)=\delta_{ij}$. If $c=\omega(f_1,f_2)$, replacing $f_2$ by $f_2+ce_1$ makes $\omega(f_1,f_2)=0$ without changing these pairings. Thus $e_1,e_2,f_1,f_2$ form two dual isotropic pairs. Applying the symplectic-basis extension used in part (a) to their nondegenerate complement gives a symplectic basis ordered as
> $$
> e_1,e_2,
> e_3,\ldots,e_n,f_3,\ldots,f_n,
> f_1,f_2.
> $$
> Relative to the decomposition of dimensions $2$, $2n-4$, and $2$, the matrix of the form is
> $$
> L=
> \begin{pmatrix}
> 0&0&I_2\\
> 0&J_{n-2}&0\\
> -I_2&0&0
> \end{pmatrix},
> $$
> while the invariance of $W$ and $W^{\perp_\omega}$ makes the matrix of $T$ block upper triangular:
> $$
> [T]=
> \begin{pmatrix}
> A_1&B_1&C_2\\
> 0&C&B_2\\
> 0&0&A_2
> \end{pmatrix}.
> $$
> In the symplectic identity
> $$
> [T]^{\mathsf T}L[T]=L,
> $$
> the upper-right block and the middle diagonal block give, respectively,
> $$
> A_1^{\mathsf T}A_2=I_2,
> \qquad
> C^{\mathsf T}J_{n-2}C=J_{n-2}.
> $$
> Thus
> $$
> (\det A_1)(\det A_2)=1,
> $$
> and $C$ is symplectic on the $(2n-4)$-dimensional quotient $W^{\perp_\omega}/W$. By induction, $\det C=1$; when $n=2$, the middle block is absent and its determinant is understood to be $1$. Since $[T]$ is block upper triangular,
> $$
> \det T
> =(\det A_1)(\det C)(\det A_2)=1.
> $$
>
> Both cases complete the induction. Returning from the complexification to the original real matrix gives $\det P=1$. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

The logical order in the first proof matters: the defining equation alone yields only $\det P=\pm1$; path-connectedness supplies the positive sign. The alternative proof of part (c) bypasses topology by induction on the symplectic dimension. Its only new external standard input is Jordan normal form over $\mathbb C$; the adapted symplectic basis, invariant complement, and block-determinant steps are constructed explicitly. The proof of part (b) imports two standard finite-dimensional linear-algebra results: polar decomposition/positive square roots and the spectral theorem for unitary matrices.

**Source status:** The exercise statement is printed in [S1, Ch. 9, Exercises §1, Ex. 1.7, printed p. 283, PDF p. 295]. Artin states the exercise but does not print either solution given here. Part (a) contains the source ambiguity recorded above. The corrected transitivity claim and the first proofs of parts (b)–(c) are independent derivations, subject to the explicitly named standard linear-algebra inputs. The second proof of part (c) is an independently audited and completed rewrite of the manuscript reproduced in the cited WeChat article, which presents it as Hong Wang's student work. Hong Wang's status as a 2026 Fields Medalist is verified by the official IMU announcement; no institutional archival record for the manuscript attribution has been checked.
