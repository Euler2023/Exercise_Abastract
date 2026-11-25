---
title: Normal Operators and the Spectral Theorem
aliases:
  - Spectral Theorem
  - Normal Matrices
topic: linear-algebra
tags:
  - concept
  - theorem
  - linear-algebra
  - normal-operators
  - spectral-theorem
created: 2026-08-24
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, §8.3, formulas (8.3.1)–(8.3.3), printed p. 232, PDF p. 244; §8.6, printed pp. 242–245, PDF pp. 254–257"
source_status: verified
status: not-started
updated: 2026-11-22
---
# Normal Operators and the Spectral Theorem

Artin's spectral theorem supplies an orthonormal eigenbasis, rather than merely an arbitrary eigenbasis. It is the prerequisite that turns a real symmetric or complex Hermitian matrix into diagonal data without changing lengths and angles. This note gives the statements and the proof chain needed before applying the theorem in exercises.

## Definitions

Throughout, $V$ is **finite-dimensional**. A Hermitian space here means a complex vector space with a **positive definite** Hermitian form; a Euclidean space means a real vector space with a positive definite symmetric form.

We follow Artin's convention: $(v,w)$ is conjugate linear in $v$ and linear in $w$, and the standard form is $v^*w$. The separate Inner Product Spaces note uses first-variable linearity. The two conventions give the same notions of norm and orthogonality, but scalar conjugations in formulas must follow the convention in use. [S1, §8.3, formulas (8.3.1)–(8.3.3), printed p. 232, PDF p. 244]

The adjoint $T^*$ is characterized by
$$
(Tv,w)=(v,T^*w).
$$
In an orthonormal basis it has matrix $A^*=\overline A^{\,\mathsf T}$ when $T$ has matrix $A$. An orthonormal basis exists by Gram–Schmidt. If $A'=P^*AP$ in another orthonormal basis, then $(A')^*=P^*A^*P$, so this definition is independent of the choice of orthonormal basis.

An operator or its orthonormal-basis matrix is:

- **normal** if $T^*T=TT^*$;
- **Hermitian** or **self-adjoint** if $T^*=T$;
- **unitary** if $T^*T=I$.

For real Euclidean spaces the corresponding adjoint matrix is $A^{\mathsf T}$; the special cases are symmetric and orthogonal operators. Hermitian and unitary operators are normal. For a unitary operator, $T^*T=I$ implies invertibility in finite dimension, hence $T^*=T^{-1}$ and also $TT^*=I$.

These properties are unchanged by unitary basis changes, as in Lemma 8.6.2. For $A'=P^*AP$ and $P^*P=PP^*=I$,
$$
(A')^*=P^*A^*P,\qquad
(A')^*A'=P^*A^*AP,\qquad
A'(A')^*=P^*AA^*P.
$$
Thus $A^*A=AA^*$, $A^*=A$, and $A^*A=I$ are respectively equivalent to the same identities for $A'$. [S1, Lemma 8.6.2, printed p. 242, PDF p. 254]

## Spectral Theorem

### Complex normal operators — Theorem 8.6.6

> [!abstract] Artin's normal spectral theorem
> A normal operator $T$ on a finite-dimensional Hermitian space has an orthonormal basis of eigenvectors.
>
> Equivalently, for $A\in M_n(\mathbb C)$ with $A^*A=AA^*$, there is a unitary matrix $P$ and a diagonal matrix $D$ such that
> $$
> P^*AP=D,\qquad A=PDP^*.
> $$
> The columns of $P$ are orthonormal eigenvectors, and $D$ lists their eigenvalues.

[S1, Theorem 8.6.6(a)–(b), printed p. 244, PDF p. 256]

### Hermitian operators — Corollary 8.6.7

> [!abstract] Hermitian spectral theorem
> If $T=T^*$, the orthonormal eigenbasis can be chosen with **real eigenvalues**. Equivalently, a Hermitian matrix is unitarily diagonalizable with a real diagonal:
> $$
> A=A^*\quad\Longrightarrow\quad P^*AP=\operatorname{diag}(\lambda_1,\ldots,\lambda_n),
> \qquad \lambda_j\in\mathbb R.
> $$

[S1, Corollary 8.6.7, printed p. 244, PDF p. 256]

### Unitary matrices — Corollary 8.6.8

> [!abstract] Unitary spectral theorem
> A unitary matrix $A$ is unitarily diagonalizable. Its diagonal eigenvalues satisfy $|\lambda_j|=1$:
> $$
> P^*AP=\operatorname{diag}(\lambda_1,\ldots,\lambda_n).
> $$
> Thus every conjugacy class in $U(n)$ contains a diagonal matrix.

The diagonalization and conjugacy statements are Corollary 8.6.8. The modulus-one assertion follows directly from norm preservation and is independently proved below. [S1, printed p. 244, PDF p. 256]

### Real symmetric operators — Theorem 8.6.10

> [!abstract] Real symmetric spectral theorem
> A symmetric operator on a finite-dimensional Euclidean space has a **real orthonormal eigenbasis** and real eigenvalues. Equivalently,
> $$
> A\in M_n(\mathbb R),\quad A^{\mathsf T}=A
> \quad\Longrightarrow\quad
> Q^{\mathsf T}AQ=\operatorname{diag}(\lambda_1,\ldots,\lambda_n),
> $$
> with $Q\in O(n)$ and $\lambda_j\in\mathbb R$.

[S1, Theorem 8.6.10(a)–(b), printed p. 245, PDF p. 257]

This is the version used for a real matrix that is both symmetric and orthogonal. A real orthogonal matrix by itself need not have real eigenvalues or a real diagonal form.

## Characterizations

The adjoint rules are
$$
(T+U)^*=T^*+U^*,\qquad (TU)^*=U^*T^*,\qquad
(T^*)^*=T,\qquad (cT)^*=\overline c\,T^*.
$$
The first three are Artin's (8.6.1); the scalar rule follows directly from conjugate linearity. [S1, printed p. 242, PDF p. 254]

Proposition 8.6.3 states, for all $v,w\in V$:
$$
(Tv,w)=(v,T^*w),\qquad (v,Tw)=(T^*v,w),
$$
$$
\begin{aligned}
T\text{ normal}
&\iff (Tv,Tw)=(T^*v,T^*w),\\
T\text{ Hermitian}
&\iff (Tv,w)=(v,Tw),\\
T\text{ unitary}
&\iff (Tv,Tw)=(v,w).
\end{aligned}
$$
[S1, Proposition 8.6.3(a)–(d), printed p. 243, PDF p. 255]

**Derivation.** The first adjoint identity is the definition, and applying it to $T^*$ gives the second. Next,
$$
(Tv,Tw)=(v,T^*Tw),\qquad
(T^*v,T^*w)=(v,TT^*w).
$$
The expressions agree for all $v,w$ precisely when $T^*T=TT^*$. Similarly,
$$
(Tv,w)-(v,Tw)=(v,(T^*-T)w),
$$
$$
(Tv,Tw)-(v,w)=(v,(T^*T-I)w).
$$
If $(v,z)=0$ for every $v$, take $v=z$; positive definiteness gives $z=0$. Thus these differences vanish for all $v,w$ exactly under the corresponding operator identities. This proves all the characterizations, including the converses.

Over a Euclidean space the same argument uses transpose instead of conjugate transpose:
$$
T\text{ symmetric}\iff (Tv,w)=(v,Tw),\qquad
T\text{ orthogonal}\iff (Tv,Tw)=(v,w).
$$
These are precisely Proposition 8.6.9(a)–(b). [S1, printed p. 245, PDF p. 257]

## Proof of the Complex Spectral Theorem

The following is an expanded derivation of Artin's route. It imports the Fundamental Theorem of Algebra to obtain a complex eigenvalue, and the finite-dimensional orthogonal decomposition $V=W\oplus W^\perp$ in a positive definite space. The latter is Corollary 8.5.1, printed p. 242 / PDF p. 254.

### 1. Orthogonal complements and adjoints — Proposition 8.6.4

If $W$ is $T$-invariant, take $u\in W^\perp$ and $w\in W$. Then
$$
(w,T^*u)=(Tw,u)=0,
$$
because $Tw\in W$. Hence $W^\perp$ is $T^*$-invariant. Interchanging $T$ and $T^*$ proves that $T^*$-invariance of $W$ implies $T$-invariance of $W^\perp$.

In particular, if $W$ is invariant under **both** $T$ and $T^*$, then so is $W^\perp$. On either such subspace $E$,
$$
(T|_E)^*=T^*|_E,
$$
since the adjoint identity restricts to vectors in $E$. Thus normality restricts to $E$: both products of the restricted adjoints are restrictions of $T^*T=TT^*$.

This reducing-subspace argument justifies the restriction step needed in the induction; it does not assume without proof that an arbitrary invariant subspace has the restricted ambient adjoint. [S1, Proposition 8.6.4 and the proof of Theorem 8.6.6, printed pp. 243–244, PDF pp. 255–256]

### 2. A normal operator and its adjoint share eigenvectors — Theorem 8.6.5

Suppose $T$ is normal and $Tv=\lambda v$ with $v\ne0$. Let $S=T-\lambda I$. Its adjoint is $S^*=T^*-\overline\lambda I$, and
$$
S^*S-SS^*=T^*T-TT^*=0.
$$
Thus $S$ is normal. From the normal characterization, with both vectors equal to $v$,
$$
\|S^*v\|^2=(S^*v,S^*v)=(Sv,Sv)=0.
$$
Positive definiteness gives $S^*v=0$, hence
$$
T^*v=\overline\lambda v.
$$
This also includes $\lambda=0$. [S1, Theorem 8.6.5 and proof, printed pp. 243–244, PDF pp. 255–256]

### 3. Induct on the dimension — Theorem 8.6.6(a)

The zero-dimensional space has the empty orthonormal basis. In positive dimension, the characteristic polynomial has a complex root by the Fundamental Theorem of Algebra, so choose an eigenvector $v_1$ and normalize it to length 1.

The line $W=\mathbb Cv_1$ is invariant under $T$. Step 2 shows that it is also invariant under $T^*$. Step 1 now implies that $W^\perp$ is invariant under both, and $T|_{W^\perp}$ is normal. Positive definiteness gives
$$
V=\mathbb Cv_1\oplus W^\perp
$$
as an orthogonal direct sum. Since $\dim W^\perp=\dim V-1$, induction supplies an orthonormal eigenbasis $v_2,\ldots,v_n$ of $W^\perp$. Together with $v_1$ it is an orthonormal eigenbasis of $V$.

Repeated eigenvalues cause no difficulty: the induction does not assume eigenvalues are distinct.

### 4. Pass to matrices — Theorem 8.6.6(b)

For a normal $A\in M_n(\mathbb C)$, let $P$ have the resulting unit eigenvectors as columns and let $D$ contain the corresponding eigenvalues. Then
$$
AP=PD,\qquad P^*P=I.
$$
Since $P$ is square, $P^{-1}=P^*$, and $P^*AP=D$.

Conversely, if $A=PDP^*$ with $P$ unitary and $D$ diagonal, then
$$
A^*A=PD^*DP^*=PDD^*P^*=AA^*,
$$
so $A$ is normal. Thus unitary diagonalizability is equivalent to normality. [S1, Theorem 8.6.6 and its matrix proof, printed p. 244, PDF p. 256; the converse is an independent immediate calculation]

## Proofs of the Special Cases

### Hermitian operators

A Hermitian $T$ is normal, so the normal theorem supplies an orthonormal eigenbasis. If $Tv=\lambda v$, then
$$
\overline\lambda(v,v)=(Tv,v)=(v,Tv)=\lambda(v,v).
$$
Since $(v,v)>0$, $\lambda=\overline\lambda$, so every eigenvalue is real. This proves Corollary 8.6.7, including its matrix form.

### Unitary operators

A unitary $T$ is normal. The normal theorem diagonalizes it by a unitary basis change. For an eigenvector,
$$
\|v\|=\|Tv\|=\|\lambda v\|=|\lambda|\|v\|,
$$
so $|\lambda|=1$. Conversely, $PDP^*$ is unitary whenever $P$ is unitary and all diagonal entries of $D$ have modulus one. Since the diagonalizing $P$ itself belongs to $U(n)$, the diagonalization is conjugacy within $U(n)$, proving Corollary 8.6.8(b).

### Real symmetric operators

Let $A=A^{\mathsf T}\in M_n(\mathbb R)$. Regard it first as a complex Hermitian matrix. The already proved Hermitian case shows that its eigenvalues are real.

Choose a complex eigenvector $z=x+iy\ne0$ for a real eigenvalue $\lambda$. Since $A$ has real entries,
$$
Ax=\lambda x,\qquad Ay=\lambda y.
$$
At least one of $x,y$ is a nonzero real eigenvector. Normalize it to a real unit vector $u_1$.

Symmetry makes the real orthogonal complement invariant: if $w\perp u_1$,
$$
(u_1,Aw)=(Au_1,w)=\lambda(u_1,w)=0.
$$
The restriction to $u_1^\perp$ is again symmetric on a Euclidean space, so real induction supplies an orthonormal eigenbasis there. Adjoining $u_1$ gives a real orthonormal eigenbasis of $\mathbb R^n$ and an orthogonal matrix $Q$ with real diagonal $Q^{\mathsf T}AQ$. The same argument in any orthonormal coordinates proves the operator version.

This expands Artin's abbreviated proof of Theorem 8.6.10; a complex unitary eigenbasis alone would not establish the existence of a **real** orthogonal eigenbasis. [S1, printed p. 245, PDF p. 257]

## Main Consequences

The following are independent deductions from the proved theorems, not additional numbered assertions being attributed to §8.6.

1. **Orthogonality of distinct normal eigenspaces.** If $Tv=\lambda v$ and $Tw=\mu w$ with $\lambda\ne\mu$, then Step 2 gives $T^*w=\overline\mu w$. Therefore
   $$
   \overline\lambda(v,w)=(Tv,w)=(v,T^*w)=\overline\mu(v,w),
   $$
   so $(v,w)=0$. The Hermitian case is a special case.
2. **Positive definiteness from the spectrum.** If $A$ is real symmetric, write $A=QDQ^{\mathsf T}$. For $x=Qy$,
   $$
   x^{\mathsf T}Ax=\sum_j\lambda_j y_j^2.
   $$
   It is positive for every nonzero $x$ exactly when all $\lambda_j>0$. A positive real spectrum without symmetry is not the hypothesis of this statement.
3. **Simultaneous diagonalization.** If Hermitian $A,B$ commute, each eigenspace $E_\lambda(A)$ is $B$-invariant because $A(Bv)=B(Av)=\lambda Bv$. The restriction of $B$ is Hermitian on that space. Diagonalizing it within each orthogonal $A$-eigenspace gives a common orthonormal eigenbasis. Repeating this argument proves the result for any finite pairwise commuting family of Hermitian operators.
4. **Finite Fourier diagonalization.** Let $\zeta=e^{2\pi i/n}$ and let $C(z_0,\ldots,z_{n-1})^{\mathsf T}=(z_{n-1},z_0,\ldots,z_{n-2})^{\mathsf T}$. For
   $$
   f_k=n^{-1/2}(1,\zeta^k,\ldots,\zeta^{(n-1)k})^{\mathsf T},
   \qquad 0\le k<n,
   $$
   direct multiplication gives $Cf_k=\zeta^{-k}f_k$. Also $(f_k,f_\ell)=n^{-1}\sum_{j=0}^{n-1}\zeta^{j(\ell-k)}=\delta_{k\ell}$, by the finite geometric sum. Hence this unitary Fourier basis diagonalizes $C$ and every complex circulant matrix $\sum_{j=0}^{n-1}c_jC^j$.
5. **Positive symmetric square roots.** For real symmetric positive definite $A=QDQ^{\mathsf T}$, set
   $$
   S=Q\operatorname{diag}(\sqrt{\lambda_1},\ldots,\sqrt{\lambda_n})Q^{\mathsf T}.
   $$
   Then $S$ is real symmetric positive definite and $S^2=A$. Consequently $A=S^{\mathsf T}S$, giving a factorization $A=P^{\mathsf T}P$ with $P=S$.

## Examples

> [!example] Artin's Hermitian matrix
> Artin uses
> $$
> M=\begin{pmatrix}2&i\\-i&2\end{pmatrix},\qquad
> P=\frac1{\sqrt2}\begin{pmatrix}1&1\\-i&i\end{pmatrix}.
> $$
> The columns of $P$ have length 1 and are orthogonal. Direct multiplication gives $P^*P=I$ and $P^*MP=\operatorname{diag}(3,1)$.
>
> [S1, printed p. 245, PDF p. 257]

> [!example] A symmetric orthogonal matrix in dimension three
> For $A=A^{\mathsf T}$ and $A^{\mathsf T}A=I$, Theorem 8.6.10 gives $Q^{\mathsf T}AQ=D$ with real diagonal $D$. Orthogonality then gives $D^{\mathsf T}D=I$, so its entries are $\pm1$. Thus $A^2=I$. In dimension three, the four possibilities up to orthogonal conjugacy are $I$, $\operatorname{diag}(-1,1,1)$, $\operatorname{diag}(-1,-1,1)$, and $-I$; their negative eigenspaces have dimensions 0, 1, 2, and 3.

> [!example] Real skew-symmetric matrices
> If $A^{\mathsf T}=-A$ is real, then $(iA)^*=iA$. Hence $iA$ is Hermitian, so $A$ is normal and is unitarily diagonalizable over $\mathbb C$ with purely imaginary eigenvalues, including possibly zero. The real rotation matrix $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ has eigenvalues $\pm i$ and has no real diagonal form.

## Hypothesis Boundaries

- **Positive definite is essential.** With $G=\operatorname{diag}(1,-1)$ and the indefinite form $(x,y)_G=x^*Gy$, the nonzero matrix
  $$
  N=\begin{pmatrix}1&1\\-1&-1\end{pmatrix}
  $$
  satisfies $G^{-1}N^*G=N$ and $N^2=0$. It is self-adjoint for this indefinite form but is not diagonalizable: a diagonalizable nilpotent matrix would be zero. This is an independent counterexample outside the theorem's hypotheses.
- **Complex symmetric is not complex Hermitian.** The condition $A^{\mathsf T}=A$ alone does not invoke Corollary 8.6.7; conjugate transpose matters.
- **Similarity and congruence differ.** An arbitrary change of coordinates for a form gives $P^*AP$, while operator similarity gives $P^{-1}AP$. They coincide for a unitary $P$, which is why the orthonormal-basis hypothesis matters.
- **Finite-dimensional scope.** No spectral theorem for infinite-dimensional operators or indefinite spaces is being imported here.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

| Source result | Printed page | PDF page | Source and expansion boundary |
| --- | --- | --- | --- |
| Formulas (8.3.1)–(8.3.3) | 232 | 244 | First-variable conjugate linearity and the standard form $X^*Y$ |
| Corollary 8.5.1 | 242 | 254 | Positive-definite orthogonal decomposition, proved in the source; used as a prerequisite |
| Formula (8.6.1), Lemma 8.6.2 | 242 | 254 | Adjoint rules and unitary-basis invariance; the displayed basis-change calculation supplies the latter |
| Proposition 8.6.3 | 243 | 255 | Source proves (a)–(b) and calls (c)–(d) similar; Exercise 6.1 assigns (c)–(d). All characterizations are derived here |
| Proposition 8.6.4 | 243 | 255 | Invariance/adjoint argument is proved in the source and expanded here |
| Theorem 8.6.5 | 243–244 | 255–256 | Normal eigenvectors are adjoint eigenvectors; source proof is expanded here |
| Theorem 8.6.6 | 244 | 256 | Normal spectral theorem, operator and matrix forms, proved by source induction and expanded here |
| Corollary 8.6.7 | 244 | 256 | Hermitian specialization; source refers to its earlier real-spectrum theorem; a direct real-spectrum proof is included here |
| Corollary 8.6.8 | 244 | 256 | Unitary specialization and conjugacy statement; the full short derivation and modulus condition are included here |
| Proposition 8.6.9 | 245 | 257 | Real symmetric/orthogonal characterizations, stated in the source; their adjoint derivation is included here |
| Theorem 8.6.10 | 245 | 257 | Source cites its earlier real-spectrum result and the normal-proof pattern; the real-eigenvector and induction steps are supplied here |

The original pages were inspected at 200 dpi on 2026-11-22. This note is an independent expanded exposition of Artin's results, not a transcription of every source proof. The Fundamental Theorem of Algebra and Gram–Schmidt/orthogonal decomposition are named prerequisites; the normal-to-Hermitian-to-real proof chain is noncircular.

**Correction to the earlier note:** the earlier summary incorrectly grouped 8.6.6–8.6.10 together as “Theorems.” The exact theorem/corollary/proposition types are now recorded above. The previous note gave conclusions and a list of consequences without the proof chain; those derivations are now included. The separate archived Exercise 6.22 asks for the real spectral theorem proof, but its later position does not replace the theorem as a prerequisite for earlier applications.
